import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);

/*==================== NAV ====================*/
.nav {
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__logo,
.nav__toggle {
  color: var(--title-color);
  font-weight: var(--font-medium);
}
.nav__logo:hover {
  color: var(--first-color);
}
.nav__toggle {
  font-size: 1.1rem;
  cursor: pointer;
}
.nav__toggle:hover {
  color: var(--first-color);
}
@media screen and (max-width: 767px) {
  .nav__menu {
    position: fixed;
    bottom:${({ active }) => active ? 0 : "-100%"};
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.5s;
  }
}
.nav__list {
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
}
.nav__link:hover {
  color: var(--first-color);
}
.nav__icon {
  font-size: 1.2rem;
}
.nav__close {
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--first-color);
}
.nav__close:hover {
  fill: var(--first-color-alt);
}
.app:hover{
  fill:var(--first-color-alt);
}
`