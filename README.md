# zhi
This is zhimeiyouping


###git 命令 
###第一次使用git 必须设置用户信息 
###`git config --global user.name luohaozhe` 
###设置用户邮箱 设置成功后可以在本机找到用户目录下的.git开头文件查看
###`git config --global user.email luohaozhe@gail` 

##查看文件状态 
###`git status` 
###当文件在本地时为红色
###当使用`git add .`  将目录下所有文件提交到工作区后 查看状态色为绿色
###`git add "文件名" ` 提交单个文件 将文件提交到暂存区
###`git commit -m "日志" "文件名"` 可不写文件名默认提交所有文件 
###nothing to commit, working tree clean 显示没有东西需要修改

##查看版本信息
###`git reflog git log`

##查看文件信息
###`cat 文件名`

##修改文件 
###`vim 文件名` 
##vim 基本命令 
###按insert 键进入 插入模式（Insert mode）编辑 不可删除 
###插入模式（Insert mode）按Esc键切换到「命令行模式（command mode）可删除 
###命令行模式（command mode 输入: 进入「Last line mode」
###输入wq退出vim并保存输入q直接退出

###文件修改后颜色变为红色需要再次提交到暂存区

##版本穿梭 
###`git reflog 1.版本号信息 2.版本穿梭` 
###`git reset --hard "版本号"`
##分支 
###查看分支
###`git branch -v`

###创建分支 
###`git branch "分支名"` 

###切换分支 
###`git checkout 分支名` 

###合并分支 
###1.先切换到你需要合并到分支上
###2.输入`git merge "分支名"` 
###合并冲突(两个分支上、同一文件都进行了修改git不知道用哪个、需要人为确认 )

###解决: 打开文件 有提示 <<head 去、当前分支修改内容 ==== 合并分支修改内容 HEADF>>> 
###删除符号和相互分支上的内容。组成新的文件 
###注意提交修改后的文件到本地库是 `git commit -m “日志”` 不要带文件名会报错。

##github 创建远程库 
###查看远程库别名 
###`git remote -v` 
###创建远程库别名
###`git remote add "别名" 仓库地址` 

##本地库代码推送到远程库
###`git push 别名（没起直接放链接） 分支名`  
##本地拉取远程库 
###`git pull 别名 分支` 
##克隆项目
###`git clong 项目地址` 
##邀请团队协作


