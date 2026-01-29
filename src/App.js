import './App.css';
import React, {useState} from 'react';
import Materials from './Material';
import Motions from './Framer';
import Nav from './Nav';
import PathMorphing from './PathMorphing';
import Container from '@mui/material/Container';

function Header(props) {
 return(
  <header className="site-header">
    <h1 className="logo"><a href="/" style={{ textDecoration: "none", color: "black" }}
    onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}
    >{props.title}</a></h1>
  </header>
 )
}

function Article(props) {
  let content=null;
  if (props.id===1) { content = <PathMorphing></PathMorphing>};
  if (props.id===2) { content = <Materials></Materials>};
  if (props.id===3) { content = <Motions></Motions>};
  
 return(
  <artical>
    <h2>{props.title}</h2>
    {props.body}
    <br/><br/>
    {content}
  </artical>
 )
}

function App() {
  const [mode,setMode] = useState('WELCOME');
  const [id,setId] = useState(null);
  const topics = [
    {id:1, title:"React", body:"React는 사용자 정의 tag를 만드는 기술입니다. 자바스크립트로 만든 UI 라이브러리로, 웹 애플리케이션의 화면을 효율적으로 구성하고 관리할 수 있게 해줍니다. 핵심 아이디어는 화면을 작은 단위인 컴포넌트로 나누어 재사용할 수 있도록 만드는 것이며, 이를 통해 복잡한 UI도 체계적으로 관리할 수 있습니다"},
    {id:2, title:"Material UI", body:"Material UI는 구글의 디자인시스템인 Material Design을 React환경에서 완벽하게 구현할 수 있도록 돕는 UI 라이브러리 입니다."},
    {id:3, title:"Framer-motion", body:"Framer-motion은 React에서 애니메이션과 전환 효과를 쉽고 직관적으로 구현할 수 있게 해주는 라이브러리입니다."}        
  ]
  let content=null;

  if (mode==='WELCOME') {
     content = <Article id="1" title="WELCOME" body="React 환경에서 다양한 컴포넌트를 이용한 페이지를 만들어 보았습니다."></Article>
  }
  else if(mode==='READ') {
    let title,body = null;
    for (let i=0;i<topics.length;i++){
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article id={id} title={title} body={body}></Article>
  }

  return (
    <Container>

      <Header title="React 프로그래밍" onChangeMode={()=>{
        setMode('WELCOME');}}>
      </Header>

      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
        }}>
      </Nav>

      {content}
      
    </Container>
  );
}

export default App;

