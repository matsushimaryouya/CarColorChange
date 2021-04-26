import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import { Button, Box, Grid, Container, Typography } from '@material-ui/core';
import Lottie from 'lottie-react-web';
import dragHand from './dragHand.json';
import './App.css';

const unityContent = new UnityContent(
  '/Build/CarColorChange.json',
  '/Build/UnityLoader.js'
);

// 色変更ボタンを作成
const ChangeColorBtn: React.FC = () => (
  <Button size="large" variant="contained"
    className="colorChangeBtn"
    style={{background: 'blue', color: 'white'}}
    type="button"
    onClick={(): void => {
      // unityContent.send("オブジェクト名", "メソッド名（Unity側でつくられている）", 1);
      unityContent.send("Audi R8", "ChangeColor", 1);
    }
    }
  >
    {/* 青へ変更 */}
  </Button>
);

// 色変更ボタンを作成
const ChangeColorBtn2: React.FC = () => (
  <Button size="large" variant="contained"
    className="colorChangeBtn"
    style={{background: 'red', color: 'white'}}
    type="button"
    onClick={(): void => {
      // unityContent.send("オブジェクト名", "メソッド名（Unity側でつくられている）", 1);
      unityContent.send("Audi R8", "ChangeColor2", 1);
    }
    }
  >
    {/* 赤へ変更 */}
  </Button>
);

// 色変更ボタンを作成
const ChangeColorBtn3: React.FC = () => (
  <Button size="large" variant="contained"
    className="colorChangeBtn"
    type="button"
    onClick={(): void => {
      // unityContent.send("オブジェクト名", "メソッド名（Unity側でつくられている）", 1);
      unityContent.send("Audi R8", "ChangeColor3", 1);
    }
    }
  >
    {/* 白へ変更 */}
  </Button>
);
const ChangeColorBtn4: React.FC = () => (
  <Button size="large" variant="contained"
    className="colorChangeBtn"
    style={{background: 'black', color: 'white'}}
    type="button"
    onClick={(): void => {
      // unityContent.send("オブジェクト名", "メソッド名（Unity側でつくられている）", 1);
      unityContent.send("Audi R8", "ChangeColor4", 1);
    }
    }
  >
    {/* 黒へ変更 */}
  </Button>
);

const App: React.FC = () => (
    <>
      <div className="topView">
      <div className="dragHand fadeout">
        <Lottie
          options={{
            animationData: dragHand
          }}
        />
      </div>
        <a className="scrollBtn" href="#secondContent">↓Scroll</a>
        <div className="btnBox"
          style={{ position: 'absolute', zIndex: 10, bottom: 10, right: 10, width: 300, display: 'flex', justifyContent: 'space-between' }}
        >
          <ChangeColorBtn />
          <ChangeColorBtn2 />
          <ChangeColorBtn3 />
          <ChangeColorBtn4 />
        </div>
        <Unity unityContent={unityContent} className="unityWindow"/>
      </div>
      <Box
        id="secondContent"
        style={{
          paddingBottom: 0,
          backgroundColor: 'white',
          minHeight: '100%',
          paddingTop: 30
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              style={{margin: 'auto'}}
              item
              lg={11}
              md={12}
              xl={12}
              xs={12}
            >
              <Box>
                <Typography style={{ textAlign: 'center' }} variant="h3" component="h2" gutterBottom>
                  商品紹介Webアプリケーション
                </Typography>
                <Typography style={{ fontSize: '1.2rem' }} variant="body1" gutterBottom>
                  <br />
                  3Dデータを利用することで実物に近いビジュアルで商品を紹介出来るWebアプリケーションです。
                  <br />
                  右下のボタンを押すことで車の色の変更が可能です。また、画面上をクリックしながらドラッグすることで車を360度見ることができます。
                  <br />
                  <br />
                  3Dの部分はUnityを使用してリアルタイムレンダリングやモデルを回転させる動作を行っております。
                  <br />
                  UI部分はReactを使用しており、Reactの豊富なUIが使用可能です。今回はMaterial UIを使用してカラーセレクトのボタンを作成しました。
                  <br />
                  <br />
                  <br />
                  <br />
                </Typography>
                <Typography variant="h4" component="h4" gutterBottom>
                  作成経緯
                </Typography>
                <Typography style={{ fontSize: '1.2rem' }} variant="body1" gutterBottom>
                  元々学生の頃からUnityをさわっており、WebでもUnityを使用したものが作れないかとずっと考えておりました。
                  <br />
                  <br />
                  今回、Reactを勉強していく中でUnityとの連携ができると知り、UnityとReactの良いところ同志を
                  使って3Dで商品を紹介できるWebアプリケーションを作成しました。
                  <br />
                  <br />
                  <br />
                  <br />
                </Typography>
                <Typography variant="h4" component="h4" gutterBottom>
                  React
                </Typography>
                <Typography style={{ fontSize: '1.2rem' }} variant="body1" gutterBottom>
                  ReactとUnityのコンポーネント間の連携が可能です。そのため、既存のReactアプリにUnityを使用することも
                  簡単にできます。
                  <br />
                  <br />
                  <br />
                  <br />
                </Typography>
                <Typography variant="h4" component="h4" gutterBottom>
                  Unity
                </Typography>
                <Typography style={{ fontSize: '1.2rem' }} variant="body1" gutterBottom>
                  JavaScriptのみでも3Dの使用は可能ですが、Unityを使用することで
                  容易にデータの変更やライティング・レイアウトの調整が可能です。
                  <br />
                  <br />
                  <br />
                  <br />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
);

export default App;