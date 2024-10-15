const header = (function() {
    const navBar = () => {
        const navBarLinks = {
            about: {
                title: "About",
                href: "#"
            },
            projects: {
                title: "Projects",
                list: {
                    tictactoe: {
                        title: "Tic-Tac-Toe",
                        href: "#",
                    }
                }
            },
            cv: {
                title: "Resume/CV",
                href: "#"
            },
            contact: {
                title: "Contact",
                href: "#"
            }
        }

        const logo = Object.assign(document.createElement("img"), {
            src: "../public/logo.svg",
            className: "logo", 
            alt: "logo",
        });

        const generateNavBarMenu = () => {
            const navBarMenu = document.createElement("div");
            navBarMenu.className = "navbar-menu"
            for (menuItem in navBarLinks) {
                const title = navBarLinks[menuItem].title;
                const href = navBarLinks[menuItem].href || navBarLinks[menuItem].list.tictactoe.href
                const navBarMenuLink = Object.assign(document.createElement("a"), {
                    innerHTML: title,
                    href: href
                })
                navBarMenu.appendChild(navBarMenuLink);
            }
            return { navBarMenu }
        }

        return {logo, generateNavBarMenu}

    }

    const buildHeader = () => {
        const navbar = navBar();
        const headerDiv = document.querySelector(".header");
        const header = document.createElement("header");
        const logoDiv = Object.assign(document.createElement("div"), {className: "logo-div"});
        logoDiv.appendChild(navbar.logo);
        header.appendChild(logoDiv);
        headerDiv.appendChild(header)
        header.appendChild(navbar.generateNavBarMenu().navBarMenu)
        
    }
    return { buildHeader }

})

const newHeader = header();
newHeader.buildHeader()
