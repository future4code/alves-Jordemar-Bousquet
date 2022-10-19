import React from 'react'
import styled from 'styled-components'

export const Menubar = styled.ul `
	height:max-content;
	display: flex;
    flex-direction:row;
	background-color: none;
	/* -webkit-backdrop-filter: blur(10px); */
  backdrop-filter: blur(10px);
    text-align: center;
	align-items: center;
	padding: 0 10px;
	margin: 0px 0 0 0;
	li {
		list-style: none;
		color: black;
		font-family: sans-serif;
		font-weight: 200px;
		padding: 12px 16px;
		margin: 0px;
		position: relative;
		cursor: pointer;
		&::before {
			content: " ";
			position: absolute;
			top: 0;
			left:0;
			height:100%;
			width: 100%;
			z-index:-1;
			transition: .2s;
		}
			&:hover {
				transform: scale(0.9);
                text-decoration: underline;
				
		}
	}

`
export const menuContainer = styled.div`

`


const AppBar = () => {
  return (
    <menuContainer>
        <Menubar>
            <li>About us</li>
            <li>Contatc</li>
            <li>Payment</li>
        </Menubar>
    </menuContainer>
  )
}

export default AppBar
