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
.userInfo{
display: flex;
}

.userItem{
  display: flex;
  margin-right: 15px;
  justify-content: center;
align-items: center;

}

.userBtn{
 display: inline-flex;
  color: #fff;
  background-color: #3f51b5;
  padding: 2px 2px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
}

.nav{
  display: flex;
justify-content: center;
align-items: center;
}

`