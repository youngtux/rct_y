import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


function Header(props) {
 return(
  <header>
    <h1><a href="/"
    onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}
    >{props.title}</a></h1>
  </header>
 )
}

function Nav(props) {
  const lis = []
  for(let i=0;i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
      </li>)
  }
 return(
  <nav>
    <ol>
      {lis}
    </ol>
  </nav>
 )
}


function Article(props) {
  const[open,setOpen] = useState(false);
  
 return(
  <artical>
    <h2>{props.title}</h2>
    {props.body}
    
    <br/><br/>
    <ButtonGroup>
      <Button variant="outlined"
      onClick={()=>{ setOpen(true); }}
      >눌러봐</Button>
      <Button variant="outlined">update</Button> 
    </ButtonGroup>

    <Button variant="outlined">delete</Button> 

    <Dialog open={open}>
      <DialogTitle>CREATE</DialogTitle>
      <DialogContent>
        <DialogContentText>
          create 하시겠습니까?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined">create</Button>
        <Button variant="outlined"
        onClick={()=>{ setOpen(false); }}
      >cancel</Button> 
      </DialogActions>
    </Dialog>   
  </artical>
 )
}

function App() {
//  const _mode = useState('WELCOME');
//  const mode = _mode[0];
//  const setMode =_mode[1];
  const [mode,setMode] = useState('WELCOME');
  const [id,setId] = useState(null);
  const topics = [
    {id:1, title:"React", body:"React는 사용자 정의 tag를 만드는 기술이다."},
    {id:2, title:"Material UI", body:"Material UI는 구글의 디자인시스템인 Material Desing을 React환경에서 완벽하게 구현할 수 있도록 돕는 UI 라이브러리 입니다."}    
  ]
  let content=null;

  if (mode==='WELCOME') {
     content = <Article title="WELCOME" body="Material UI를 이용한 React 프로그램 실습"></Article>
  }
  else if(mode==='READ') {
    let title,body = null;
    for (let i=0;i<topics.length;i++){
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <Container>
      <Header title="WELCOME"
       onChangeMode={()=>{
        setMode('WELCOME');
       }}></Header>
      <Grid container>
        <Grid item size={2}>
          <Nav topics={topics} onChangeMode={(_id)=>{
            setMode('READ');
            setId(_id);
          }}>
          </Nav>
        </Grid>
        <Grid item size={10}>      
          {content}
        </Grid>  
      </Grid>
    </Container>
  );
}

export default App;

