import React, {useEffect} from "react"
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import TopLogo from './../images/top-logo.png'
import Remera from './../images/remera.png'
import Loading from './../images/loading.png';
import { createNoSubstitutionTemplateLiteral, ScriptSnapshot } from "typescript";

const IndexPage = () => {

  useEffect(() => {

    const returnScript = () => {
      const script = document.createElement("script");
  
      script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.defer = true;
      script.setAttribute('data-preference-id', "8969691-fe831bd3-bc10-488e-ba86-200b3bacab8f");
      script.setAttribute("button", true);
      script.async = true;

      return script;
    }

    let banners = document.getElementsByClassName('banner')
    
    for (var i = 0; i < banners.length; i++) {
      console.log(banners[i]);
      banners[i].appendChild(returnScript());
    };
  }, [])

  const BannerContent = (
    <>
      <h2>¡Nuevas dinoremeras!</h2>
      <Image className="image-remera" src={Remera} />
      <p>Ya llegaron las nuevas remeras del dino más pianito de todos. En algodón y serigrafiadas. ¡Están buenísimas!</p> 
      {/* <a className="link-shop" href="#">Pedí la tuya</a> */}
      {/* <div className="banner-cover">Muy pronto...</div> */}
    </>
  );

  return (
    <>
      <Head>
        <title>Dinopianito | El juego donde siempre ganás</title>
        <script defer src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"  type="text/javascript" />
        <script defer src="https://code.createjs.com/createjs-2015.11.26.min.js" type="text/javascript" />
        <script defer src="main.js" type="text/javascript" />
        <div id="fb-root"></div>
        <script defer async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v11.0&appId=841267929357321&autoLogAppEvents=1" nonce="99OLOtnL"/>
      </Head>
      <StyledMain id="main">
        <div className="title-container">
            <Image src={TopLogo}/>
        </div>
        <div className="canvas-container">
            <div className="banner banner-left">
              {BannerContent}
            </div>
            <canvas id="first-canvas" width="600px" height="400px"/>
            <div className="banner banner-right">
              {BannerContent}
            </div>
        </div>
        <div className="facebook-button">
          <div className="fb-like" data-href="https://www.facebook.com/dinopianito/" data-width="" data-layout="standard" data-action="like" data-size="large" data-width="318" data-share="true"></div>
        </div>
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  padding: 0px 10%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title-container {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      margin-top: 20px;
      max-width: 600px;
      min-width: 400px;
      width: 80%;
    }
  }
  .canvas-container {
    width: 100%;
    display: flex;
    canvas {
      background-image: url(${Loading});
      background-size: 600px 400px;
      display: inline;
      border: #e00027 4px solid;
      border-radius: 15px;
    }
    .banner {
      width: 240px;
      height: 410px;
      background: white;
      border: #e00027 4px solid;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      position: relative;
      .banner-cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.7);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color: #e00027;
        font-weight: 600;
      }
      h2 {
        font-family: arcaderoundr;
        font-size: 14px;
        line-height: 24px;
        background: #e00027;
        padding: 12px 0;
        margin: 0;
        color: white;
      }
      .image-remera {
        width: 75%;
        margin: 12px auto 0;
      }
      p {
        font-size: 12px;
        line-height: 16px;
        opacity: 0.7;
        padding: 0 12px;
        margin-bottom: 18px;
        flex-grow: 1;
        display: flex;
        align-items: center;
      }
      button {
        display: inline-block;
        background: dodgerblue;
        color: white;
        text-decoration: none;
        margin-top: auto;
        padding: 0 18px;
        border-radius: 8px;
        font-family: Arial;
        pointer-events: none;
        width: calc(100% - 24px);
        margin: auto auto 12px;
      }
      &.banner-left {
        margin-left: auto;
        margin-right: 18px;
      }
      &.banner-right {
        margin-right: auto;
        margin-left: 18px;
      }
    }
  }
  .facebook-button {
    margin-top: 24px;
    background: white;
    padding: 18px;
    border-radius: 15px;
    border: #e00027 4px solid;
    display: flex;
    justify-content: center;
  }
`;

export default IndexPage
