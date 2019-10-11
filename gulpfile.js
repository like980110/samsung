const gulp=require("gulp");
const sass=require("gulp-sass");

gulp.task("watchall",async ()=>{
    //监听并复制html文件
    gulp.watch("*.html",async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\samsung"))
    })

    gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\samsung\\css"))
    })

    gulp.watch("sass/*.scss",async ()=>{
        gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\samsung\\css"))
    })
})