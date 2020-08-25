import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import logo from "./logo.png"
import bars from "../icons/bars.svg"
import chevDown from "../icons/chev-down.svg"
import { ContentContainer } from "./SharedStyledComponents"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const Columns = styled.div(tw`flex`)

function Menu({phoneNumber}) {
  const {
    contentfulNavigationContainer: { navigationElements = [], phoneNumber: defaultPhoneNumber } = {},
  } = useStaticQuery(graphql`
    query SiteNavigationQuery {
      contentfulNavigationContainer {
        id
        phoneNumber
        navigationElements {
          id
          title
          link {
            slug
          }
          navigationElements {
            id
            title
            link {
              slug
            }
          }
        }
      }
    }
  `)
  // TODO: update render with recursive function so i can handle N nested menu items
  return (
    <>
      <div css={tw`fixed w-full bg-white z-50  px-8 hidden md:block`}>
        <ContentContainer css={tw`flex justify-between items-center`}>
          <div>
            <a href="/">
              <img src={logo} alt="logo" css={{width: 266}}/>
            </a>
          </div>
          <div css={tw`hidden lg:block`}>
            <nav>
            <div css={tw`text-right text-sm pr-4`}>Speak with us today: <a css={tw`font-bold text-aapc-blue`} href={`tel:${phoneNumber || defaultPhoneNumber}`}>{phoneNumber || defaultPhoneNumber}</a></div>
              <Columns>
                {navigationElements.map(
                  ({ id, navigationElements, title, link }) => (
                    <div key={id} css={tw`p-4`}>
                      {!navigationElements ? (
                        <Link
                          to={ link.slug == 'overview' ? "/" : `/${link.slug}/`}
                          activeStyle={tw`text-aapc-blue`}
                        >
                          {title}
                        </Link>
                      ) : (
                        <MenuItemWithSubMenu
                          title={title}
                          subMenuLinks={navigationElements}
                        />
                      )}
                    </div>
                  )
                )}
              </Columns>
            </nav>
          </div>
        </ContentContainer>
      </div>
      <MobileMenu navigationElements={navigationElements} />
    </>
  )
}

function MenuItemWithSubMenu({ title, subMenuLinks }) {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenuHover = () => setShowMenu(true)
  const handleMenuLeave = () => setShowMenu(false)

  return (
    <div onMouseEnter={handleMenuHover} onMouseLeave={handleMenuLeave}>
      <div>{title}</div>

      {showMenu && (
        <div css={tw`absolute shadow-2xl rounded-md z-50 p-4 bg-white`}>
          {subMenuLinks.map(({ id, title, link: { slug } }) => (
            <div key={id}>
              <Link to={`/${slug}/`} activeStyle={tw`text-aapc-blue`}>
                {title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileMenuItemWithSubMenu({ title, subMenuLinks }) {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenuClick = () => setShowMenu(!showMenu)

  return (
    <>
      <MenuButton showMenu={showMenu} onClick={handleMenuClick}>
        {title}
      </MenuButton>
      {showMenu && (
        <ul css={tw`pl-4`}>
          {subMenuLinks.map(({ id, title, link: { slug } }) => (
            <li key={id} css={tw`py-1`}>
              <Link to={`/${slug}/`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

const MenuButton = styled.button(props => ({
  display: "flex",
  position: "relative",
  width: "100%",
  "&:: after": {
    display: "block",
    position: "absolute",
    right: ".35em",
    content: `""`,
    backgroundImage: `url(${chevDown})`,
    width: "1em",
    height: "1em!important",
    height: "16px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: "transform .1s ease",
    transform: !props.showMenu && "rotate(-90deg)",
    top: "25%",
  },
}))
function MobileMenu({ navigationElements }) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  const handleMenuClick = () => setMobileMenuVisible(!mobileMenuVisible)
  return (
    <div css={tw`lg:hidden`}>
      <div
        css={tw`flex justify-between fixed w-full bg-white z-50 items-center px-8`}
      >
        <div>
          <a href="/">
            <img src={logo} alt="logo" css={{width: 200}}/>
          </a>
        </div>
        <div>
          <img onClick={handleMenuClick} src={bars} alt="" />
        </div>
      </div>
      {mobileMenuVisible && (
        <nav
          css={tw`lg:hidden py-32 w-screen h-screen fixed z-40 bg-white px-6`}
        >
          <ul>
            {navigationElements.map(
              ({ id, navigationElements, title, link }) => (
                <li key={id} css={tw`mb-4`}>
                  {!navigationElements ? (
                    <Link to={ link.slug == 'overview' ? "/" : `/${link.slug}/`}>{title}</Link>
                  ) : (
                    <MobileMenuItemWithSubMenu
                      title={title}
                      subMenuLinks={navigationElements}
                    />
                  )}
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Menu
