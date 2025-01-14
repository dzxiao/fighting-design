<script lang="ts" setup>
  import { lists, bottomList } from './src/list'
</script>

<template>
  <div id="banner">
    <div class="logo_box">
      <f-image
        class="logo"
        :draggable="false"
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        alt="Fighting Design logo"
      />
    </div>
  </div>

  <div id="content">
    <div id="title">
      <img
        class="logo"
        draggable="false"
        src="https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"
        alt="Fighting Design logo"
      />
      <h1 class="title">Fighting Design</h1>

      <h1 class="subtitle">
        可在 vue3 应用程序中快速构建交互界面，看起来还不错。
      </h1>
      <p class="content">
        <strong>🌈 Fighting Design</strong>
        是一款灵活、优质的组件库，为开发者、设计师准备。希望开发者可以借用其中的的设计，在不久的将来，孕育出更高阶的组件库。
      </p>

      <f-button type="primary" size="large" href="/docs/install">
        开始使用
      </f-button>
    </div>

    <div id="introduce">
      <div class="advantage">
        <div v-for="(list, index) in lists" :key="index" class="advantage_item">
          <div class="img_box">
            <img
              :src="`https://tianyuhao.cn/images/fighting-design/home-${
                index + 1
              }.svg`"
            />
          </div>
          <p class="text">{{ list }}</p>
        </div>
      </div>
    </div>

    <div id="footer">
      <div class="footer_item">
        <div class="list">
          <ul v-for="(listItem, index) in bottomList" :key="index">
            <h4>{{ listItem.title }}</h4>
            <li v-for="(list, i) in listItem.item" :key="i">
              <f-link target="_blank" :href="list.link">
                {{ list.text }}
              </f-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer_item">
        <h4 class="title">加入我们</h4>
        <img src="https://tianyuhao.cn/images/auto/weixin.png" alt="weixin" />
      </div>

      <p class="code">
        <f-link target="_blank" href="https://beian.miit.gov.cn">
          FightingDesign | 浙ICP备2021024540号-2
        </f-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #banner {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    min-height: 370px;
    padding-bottom: 30px;

    .logo_box {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 100%;
      width: 100%;
      max-width: 1368px;
      z-index: -1;
      overflow: hidden;
      background: -webkit-linear-gradient(
        815deg,
        rgb(57, 92, 227) 10%,
        rgb(94, 224, 221)
      );
      -webkit-mask: url('./images/banner.svg') 100% -150px / cover no-repeat;

      .logo {
        width: 500px;
        height: 500px;
        top: 0px;
        right: 0px;
        position: absolute;
        transform: translate(-155px, -77px) scale(1);
        user-select: none;
      }
    }
  }

  #content {
    transition: 0.2s;
    max-width: 1350px;
    height: 500px;
    padding: 30px;
    box-sizing: border-box;
    right: 0;
    left: 0;
    margin: auto;
    top: 140px;
    position: absolute;

    #title {
      .logo {
        width: 120px;
        height: 120px;
        user-select: none;
      }

      .title {
        font-size: 32px;
        line-height: 43px;
        text-align: left;
        letter-spacing: -1.2px;
        font-weight: bold;
        word-break: normal;
        display: inline-block;
        margin-top: 20px;
        background: -webkit-linear-gradient(
          55deg,
          rgb(57, 92, 227) 10%,
          rgb(94, 224, 221)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .subtitle {
        margin-top: 10px;
        font-size: 33px;
        font-weight: 700;
        transition: 0.3s;
        font-weight: 500;
        line-height: 50px;
        transition: 0.3s;
      }

      .content {
        transition: 0.3s;
        max-width: 700px;
        margin-top: 30px;
      }

      .f-button-primary {
        margin-top: 30px;
      }
    }

    #introduce {
      margin-bottom: 40px;

      .advantage {
        margin-top: 80px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        user-select: none;

        .advantage_item {
          width: 50%;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .img_box {
            width: 70%;
            overflow: hidden;
            height: 12rem;

            img {
              width: 100%;
              height: 200px;
              transition: 0.3s;
            }
          }

          .text {
            margin-top: 30px;
            font-size: 20px;
          }
        }
      }
    }

    #footer {
      border-top: 1px solid #eee;
      width: 100%;
      margin: auto;
      padding: 40px 0;
      box-sizing: border-box;

      .footer_item {
        .title {
          margin: 30px 0 10px 0;
          font-weight: 600;
        }

        .list {
          display: flex;
          justify-content: space-between;
          user-select: none;

          ul {
            h4 {
              font-weight: 600;
              line-height: 36px;
              font-size: 15px;
            }

            li {
              line-height: 36px;
              cursor: pointer;
              font-size: 14px;
            }
          }
        }
      }

      .code {
        margin-top: 30px;
        text-align: center;
        font-size: 15px;
        cursor: pointer;

        a {
          color: #333;
        }
      }
    }
  }

  @media (max-width: 768px) {
    #content {
      top: 200px !important;
    }
  }
</style>
