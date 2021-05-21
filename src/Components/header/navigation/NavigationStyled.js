import styled from 'styled-components'

export const NavigationContainer = styled.nav`
.list{
list-style: none;
display: flex;
align-items: center;
margin-right:- 30px;
}

.listItem{
margin-right: 30px;
}

.link{
    text-decoration: none;
    text-transform: uppercase;
    color: #080808;

}
.activeLink{
  color: blue;  
}

`