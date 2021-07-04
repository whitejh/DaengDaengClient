<template>
  <v-container class="grey lighten-5">
    <!-- testData를 getTest로 변경하면 json-server 없이 화면에 띄우는 것 가능 -->
    <Sort :goodsdata="goodsData" :goodsdataOriginal="goodsData" :goodsdataFinish="goodsFinish" :infiniteBtn="infiniteChange" v-on:pass="SortGoods" v-on:change="infiniteChangeBtn"></Sort>
    <!-- v-on:pass="deliverGoods" -->
    <!-- v-bind:goodsData="getGoods" -->
    <div v-if="goodsData.length > 0">
      <v-row>
        <v-col
          v-for="item in goodsData"
          v-bind:key="item"
          sm="3"
          xl="3"
          lg="3"
          xs="3"
          md="3"
          cols="12"
        >
          <div class="card" v-if="item.deal==='no'">
            <div class="dropdown" v-if="urlInfo === '/mypage'">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">거래완료</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">게시글 수정</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">숨기기</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">삭제</a>
                </li>
              </ul>
            </div>
            <img :src="item.path" class="card-img-top" alt="image" />
            <div class="card-body">
              <h5 class="card-title">
                {{ item.name }}
              </h5>
              <p class="card-text">
                {{ item.price }}
              </p>
              <p class="card-text">
                {{ item.wanted_location }}
              </p>

              <router-link to="/productdetail">
                <div class="card-button">
                  <button type="button" class="btn btn-primary btn-sm">
                    상세 정보 보기
                  </button>
                </div>
              </router-link>
            </div>
            <div class="card-footer">
              <small class="text-muted">{{ item.time }}</small>
            </div>
          </div>
          <div class="card" v-bind:style="mycard" v-else>
            <div class="dropdown" v-if="urlInfo === '/mypage'">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">거래완료</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">게시글 수정</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">숨기기</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">삭제</a>
                </li>
              </ul>
            </div>
            <img :src="item.path" class="card-img-top" alt="image" />
            <div class="card-body">
              <h5 class="card-title">
                {{ item.name }}
              </h5>
              <p class="card-text">
                {{ item.price }}
              </p>
              <p class="card-text">
                {{ item.wanted_location }}
              </p>

              <router-link to="/productdetail">
                <div class="card-button">
                  <button type="button" class="btn btn-primary btn-sm">
                    상세 정보 보기
                  </button>
                </div>
              </router-link>
            </div>
            <div class="card-footer">
              <small class="text-muted">{{ item.time }}</small>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <infinite-loading v-if="infiniteChange" @infinite="infiniteHandler" spinner="waveDots" >
      <div
        slot="no-more"
        style="color: rgb(102, 102, 102); font-size: 14px; padding: 10px 0px"
      >
        목록의 끝입니다 :)
      </div>
    </infinite-loading>

  </v-container>
</template>

<script>
import Sort from "./sort.vue";
import InfiniteLoading from "vue-infinite-loading";
import { getGoodsList } from "../../api/Goods.js";
// //watchar 가 화면에 들어오면, 콜백함수를 실행하겠다
export default {
  data: () => ({
    goodsData: [],
    goodsFinish:[],
    page: 1,
    limit: 8,
    start: 0,
    urlInfo: window.location.pathname,
    searchData: "",
    infiniteChange:true,
    // mid:this.$route.params.mid,
    isSearch: 0,
    mycard:{
      opacity:0.3
    }
  }),
  async created() {
    let i=0;
    try {
      const response = await getGoodsList(this.limit);
      this.goodsData = response.data;
      // 거래 완료 데이터 푸쉬
      for(i=0; i<response.data.length;i++){
        if(response.data[i].deal=='yes'){
          this.goodsFinish.push(response.data[i]);
        }
      }
      // 카테고리 이동 시
      if(this.$route.params.length>0){ 
        this.goodsData=[];
        for(i=0; i<response.data.length;i++){
          if(this.$route.params.big==response.data[i].big_category && this.$route.params.mid==response.data[i].mid_category){
              this.goodsData.push(response.data[i]);       
          }
        }
        this.infiniteChange=false;
      }
      console.log(response);
      console.log(this.$route.params.big)
      console.log(response.data[0].big_category)
    } catch (error) {
      alert(error);
    }
  },

  components: {
    InfiniteLoading,
    Sort,
  },
  methods: {
    searchGoods(data) {
      this.searchData = data;
      this.isSearch = 1;
    },
    infiniteHandler($state) {
      // const options = {
      //   params: {
      //     //limit는 무한스크롤이 진행되면서 다음에 불러올 페이지 번호 또는 아이디를 업데이트
      //     _limit: this.limit + 12,
      //   },
      // };
      // if(this.$route.params.length==0){
      getGoodsList(this.limit)
        .then((response) => {
          setTimeout(() => {
            if (response.data.length > 0) {
              this.goodsData = this.goodsData.concat(
                response.data.slice(this.start, this.limit)
              );
              $state.loaded();
              this.limit += 8;
              this.start += 8;
              // 데이터를 8로 나눴을 때 8보다 작게 되면
              if (response.length / 8 < 1) {
                $state.complete(); // 데이터가 없으면 로딩 끝
              }
            } else {
              $state.complete();
            }
          }, 1000);
        })
        .catch((error) => {
          console.error(error);
        });
        // }
    },
    SortGoods(sortedGoods){
      this.goodsData=sortedGoods;
      console.log('sortOk')
    },
    infiniteChangeBtn(){
      this.infiniteChange=false;
    }
  },
};
</script>

