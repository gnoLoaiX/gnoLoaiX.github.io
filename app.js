;(function () {
  var logo = document.querySelector('.logo')
  var background = logo.querySelector('#background')

  var openColors = [
    //  Gray
    [ '#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529' ],
    //  Red
    [ '#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a' ],
    //  Pink
    [ '#fff0f6', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d' ],
    //  Grape
    [ '#f8f0fc', '#f3d9fa', '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c' ],
    //  Violet
    [ '#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4' ],
    //  Indigo
    [ '#edf2ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7' ],
    //  Blue
    [ '#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab' ],
    //  Cyan
    [ '#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285' ],
    //  Teal
    [ '#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b' ],
    //  Green
    [ '#ebfbee', '#d3f9d8', '#b2f2bb', '#8ce99a', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e' ],
    //  Lime
    [ '#f4fce3', '#e9fac8', '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d' ],
    //  Yellow
    [ '#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700' ],
    //  Orange
    [ '#fff4e6', '#ffe8cc', '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f' ]
  ]

  var interval = 2222
  var now = Date.now() / interval

  var color = ~~(now / 10 % 13)
  var gradation = ~~(now % 10)

  console.log(
    '%cOC- %c  %c %c  ',
    'color: ' + openColors[0][7],
    'border-radius: 3px; background: ' + openColors[color][7],
    '',
    'border-radius: 3px; background: ' + openColors[0][gradation]
  )

  background.setAttribute('fill', openColors[color][gradation])

  logo.addEventListener('click', function () {
    background.setAttribute('fill', openColors[~~(Math.random() * 13)][~~(Math.random() * 10)])
  })
})()

// baidu analytics
;(function() {
  var hm = document.createElement('script')
  hm.src = 'hm.js-655e3d724e78de13d1a583921c7fdc19.js'/*tpa=https://hm.baidu.com/hm.js?655e3d724e78de13d1a583921c7fdc19*/
  document.body.appendChild(hm)
})()

;(function () {
  // /*h5  geolocation */
  // if(navigator.geolocation){
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     /*获取定位成功回调函数*/
  //     /*定位数据*/
  //     alert(position);
  //     var latitude = position.coords.latitude;
  //     var longitude = position.coords.longitude;
  //
  //     // 这些都是写死--百度地图提供的代码
  //     var map = new BMap.Map("container"); // container表示显示哪个容器
  //     // 把经度纬度传给百度
  //     /*40.1691162668,116.6348530780*/
  //     var point = new BMap.Point(longitude, latitude);
  //     //默认的比例
  //     map.centerAndZoom(point, 20);
  //     //添加鼠标滚动缩放
  //     map.enableScrollWheelZoom();
  //     // 只写上面三行就可出现地图了，并且会定位
  //     // 定义好了一个图片标记
  //     var myIcon = new BMap.Icon("1.png", new BMap.Size(128, 128));
  //     // 创建标注
  //     var marker = new BMap.Marker(point, {icon: myIcon});
  //     map.addOverlay(marker);
  //     //点击地图，获取经纬度坐标
  //     map.addEventListener("click",function(e){
  //       console.log("经度坐标："+e.point.lng+" 纬度坐标："+e.point.lat);
  //     });
  //   }, function (error) {
  //     /*获取定位失败回调函数*/
  //     /*失败原因*/
  //     alert(error)
  //   });
  // }

  // demo
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // 这些都是写死--百度地图提供的代码
  var map = new BMap.Map("container"); // container表示显示哪个容器
  // 把经度纬度传给百度
  /*40.1691162668,116.6348530780*/
  var point = new BMap.Point(longitude, latitude);
  //默认的比例
  map.centerAndZoom(point, 20);
  //添加鼠标滚动缩放
  map.enableScrollWheelZoom();
  // 只写上面三行就可出现地图了，并且会定位
  // 定义好了一个图片标记
  var myIcon = new BMap.Icon("1.png", new BMap.Size(128, 128));
  // 创建标注
  var marker = new BMap.Marker(point, {icon: myIcon});
  map.addOverlay(marker);
  //点击地图，获取经纬度坐标
  map.addEventListener("click",function(e){
    alert("经度坐标："+e.point.lng+" 纬度坐标："+e.point.lat);
  });
})()
