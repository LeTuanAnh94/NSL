(function () {
	myApp.controller('loginCtr', function($scope, $http){
		$scope.user = {
			email:'',
			password:''
		}
		$scope.disable = false;
		$scope.submit = function(validate){
			if(!validate || $scope.disable) return;
			$scope.disable = true;
			$http.post("/login/local",$scope.user,{}).then(function(res){
				$scope.disable = false;
				console.log(res.data)
	  			if(res.data.message == 'success'){
	  				location.reload();
	  			}else if(res.data.message == 'email_not_found'){
	  				utils.alert({
                        title:'Thông báo',
                        msg: 'Email không tồn tại'
                    });
	  			}else if(res.data.message == 'password_not_correct'){
	  				utils.alert({
                        title:'Thông báo',
                        msg: 'Sai mật khẩu'
                    });
	  			}else if(res.data.message == "account_not_active"){
	  				utils.alert({
                        title:'Thông báo',
                        msg: 'Tài khoản chưa được kích hoạt'
                    });
	  			}else{
	  				utils.alert({
                        title:'Thông báo',
                        msg: 'Có lỗi gì đó xảy ra.'
                    });
	  			}
	  		});
		}
	});

  ///// register role Teacher

  myApp.controller('registerCtrTeacher',function($scope,$http) {
    $scope.user={
      fullname:'',
      email:'',
      password:''
    }

    $scope.disable = true;
    $http.post("/user/registerTeacher",$scope.user,{}).then(function(res) {
      $scope.disable = false;
      if(res.data.message == 'success'){
        utils.alert({
          title:'Thông Báo',
          msg: 'Chúng tôi đã gửi 1 link kích hoạt đến email : ' + $scope.user.email
        });
      }
      else if(res.data.message == 'email_exist'){
        utils.alert({
          title:'Thông báo',
          msg: 'Email đã được đăng ký'
        });
      }

      else{
        utils.alert({
          title:'Thông báo',
          msg: 'Có lỗi gì đó xảy ra.'
        });
      }


    });

  });


  //////




})();
