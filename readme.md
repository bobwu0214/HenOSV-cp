## 版本
* v1（20250308）：threejs界面出来，输入框和进度条可以输入数据，可以实时更新模型，但装配有问题
* v2（20250309）：轮子，轮轴装配正常；
* v3：（20250309/508cc00）:正常部署到web，https://bobwu0214.github.io/HenOSV-cp/modeling 
* v4:（20250409/2ebcaf9）：正常配置阿里云域名henosv.com，（）


1. 在不配置阿里云域名是，使用github静态页面网址可以访问网页https://bobwu0214.github.io/HenOSV-cp/，
2. github分支在main/docs，目前github的custom domain 是henosv.com，但是访问时，网页是空白，同时显示DNS Check in Progress
3. 目前已经配置阿里云域名henosv.com，（
主机记录 记录类型 解析请求来源 记录值 TTL 状态 
www CNAME 默认 bobwu0214.github.io 10 分钟 启用
@ CNAME 默认 bobwu0214.github.io 10 分钟 启用
）
1. henosv.com通过 "检查"发现四个错误和1个警告
   * failed to load resource: the server responded with a status of 404 ()
   * failed to/HenOSV-cp/assets/index-ChCfJlBf.js:1
   * Failed to load resource: the server responded with a status of 404 ()
   * Failed to load resource:index-CPFimqIs.css:1 the server responded with a status of 404 ()
2.  是否需要 vite.config.ts 的 base 改成 '/'，原来的 'HenOSV-cp/' 这个会影响页面的打包出来的产路路径，比如，然后调整页面中 app.tsx 的 basename 和 path；
            
            
           