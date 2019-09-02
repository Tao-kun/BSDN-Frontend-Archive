<template>
	<div>
		<nmslHeader></nmslHeader>
		<div style="padding-top: 100px;">
			<div style="width: 50%;margin: 0 auto;position: relative;" id="BSDNUserInfos">
				<img :src="oldPicUrl" style="width: 200px;height: 200px;border-radius: 5px;float: left;margin-top: 50px;border-radius: 50%;" />

				<div v-if="showUpload" style="width: 200px;height: 200px;top: 50px;position: absolute;">
					<div style="width 100%;height: 75px;">
						<img src="../assets/camera.png" style="width: 50px;height: 50px;margin: 50px auto 0;display: block;"/>
					</div>
					<div style="width 100%;height: 100px;text-align: center;color: white;">上传你的图片</div>
				</div>

				<!-- 上传在这 -->
				<div style="width: 200px;height: 200px;top: 50px;position: absolute;" @mouseenter="showUpload=true" @mouseout="showUpload=false">
					<el-upload style="height: 200px;width: 200px;" :action="postUrl" :show-file-list="false"
					 :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" accept="image/png,image/jpeg">
						<!-- <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
					</el-upload>
				</div>
				
				

				<div style="float: left;margin-left: 10%;margin-top: 50px;">
					<el-form ref="form" :model="form" label-width="80px">
						<!-- <div style="width: 250px;"> -->
						<el-form-item label="昵称">
							<el-col :span="20">
								<el-input v-model="form.name"></el-input>
							</el-col>
						</el-form-item>
						<!-- </div> -->

						<!-- <div style="width: 250px;"> -->
						<el-form-item label="所在地">
							<el-col :span="20">
								<el-select v-model="form.region" placeholder="请选择">
									<el-option label="北京" value="beijing"></el-option>
									<el-option label="上海" value="shanghai"></el-option>
									<el-option label="广州" value="guangzhou"></el-option>
									<el-option label="深圳" value="shenzhen"></el-option>
								</el-select>
							</el-col>
						</el-form-item>
						<!-- </div> -->

						<el-form-item label="出生日期">
							<el-col :span="20">
								<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
							</el-col>
						</el-form-item>


						<el-form-item label="擅长领域">
							<el-checkbox-group v-model="form.type">
								<el-checkbox label="java" name="type"></el-checkbox>
								<el-checkbox label="python" name="type"></el-checkbox>
								<el-checkbox label="c++" name="type"></el-checkbox>
								<el-checkbox label="js" name="type"></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="简介">
							<el-input type="textarea" v-model="form.desc"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">立即修改</el-button>
							<el-button>取消</el-button>
						</el-form-item>
					</el-form>
				</div>

			</div>
		</div>
		<nmslFooter></nmslFooter>
	</div>
</template>

<script>
	import nmslHeader from '@/views/BaseHeader'
	import nmslFooter from '../components/indexComponents/footer.vue'
	export default {
		name: 'userInfos',
		data() {
			return {
				oldPicUrl: "static/avatar1.png",
				showUpload:false,
				postUrl:"https://jsonplaceholder.typicode.com/posts/",
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 jpg 或 png 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
		},
		components: {
			nmslHeader,
			nmslFooter
		},
}
</script>

<style>
	#BSDNUserInfos:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.el-upload{
		width: 100%;
		height: 100%;
	}
</style>
