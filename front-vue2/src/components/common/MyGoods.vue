<template>
	<v-container class="grey lighten-5">
		<!-- testData를 getTest로 변경하면 json-server 없이 화면에 띄우는 것 가능 -->
		<Sort
			:goodsdata="goodsData"
			:goodsdataOriginal="goodsData"
			:goodsdataFinish="goodsFinish"
			:infiniteBtn="infiniteChange"
			v-on:pass="SortGoods"
			v-on:change="infiniteChangeBtn"
		></Sort>
		<!-- v-on:pass="deliverGoods" -->
		<!-- v-bind:goodsData="getGoods" -->
		<div v-if="goodsData.length > 0">
			<v-row>
				<v-col
					v-for="(item, index) in this.mygoods"
					v-bind:key="index"
					sm="3"
					xl="3"
					lg="3"
					xs="3"
					md="3"
					cols="12"
				>
					<div class="card" v-if="item.item_status === '0'">
						<div class="dropdown" v-if="mypageCheck === 'MyPage'">
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

							<div class="card-button">
								<button
									@click="goToDetail(item.id)"
									type="button"
									class="btn btn-primary btn-sm"
								>
									상세 정보 보기
								</button>
							</div>
						</div>
						<div class="card-footer">
							<small class="text-muted">{{ item.created_at }}</small>
						</div>
					</div>
					<div class="card" v-bind:style="mycard" v-else>
						<div class="dropdown" v-if="mypageCheck === 'MyPage'">
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

							<div class="card-button">
								<button
									@click="goToDetail(item.id)"
									type="button"
									class="btn btn-primary btn-sm"
								>
									상세 정보 보기
								</button>
							</div>
						</div>
						<div class="card-footer">
							<small class="text-muted">{{ item.created_at }}</small>
						</div>
					</div>
				</v-col>
			</v-row>
		</div>

		<infinite-loading
			v-if="infiniteChange"
			@infinite="infiniteHandler"
			spinner="waveDots"
		>
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
import Sort from './sort.vue';
import InfiniteLoading from 'vue-infinite-loading';
import { getGoodsList, getGoodsCategory } from '../../api/Goods';
import { getMypage } from '../../api/Mypage';
import axios from 'axios';
// //watchar 가 화면에 들어오면, 콜백함수를 실행하겠다
export default {
	data: () => ({
		goodsData: [],
		goodsFinish: [],
		page: 1,
		limit: 8,
		start: 0,
		mypageCheck: '',
		searchData: '',
		infiniteChange: true,
		// mid:this.$route.params.mid,
		isSearch: 0,
		mycard: {
			opacity: 0.3,
		},
        mygoods : [ ]
	}),
	async created() {

        const {data} = await axios.get("http://localhost:3004/mypage");
        this.mygoods = data.goods;
        console.log(this.mygoods);



		
	},

	components: {

	},
	methods: {

    }
};
</script>
