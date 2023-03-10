# آزمایش اول آزمایشگاه مهندسی نرم‌افزار

## توضیحات پروژه
برای این آزمایش ما یک صفحه todo list را پیاده‌سازی کردیم.

این صفحه دارای قابلیت‌هایی نظیر pin کردن تسک، done کردن تسک، تعیین الویت برای تسک و تعیین رنگ برای تسک برای گروه‌بندی و فیلتر کردن تسک‌ها را دارد.

تصویر زیر نمایی از صفحه پیاده‌سازی شده است.

![](https://user-images.githubusercontent.com/59199865/224257232-9756c9dd-37d6-48b7-b2ca-64ca1e73b8f3.png)

## اجرای پروژه
برای اجرای پروژه به صورت لوکال مراحل زیر را به ترتیب انجام می‌دهیم.

ابتدا با استفاده از دستور زیر پروژه را کلون می‌کنیم.

``` git clone git@github.com:nonaghazizadeh/SE_lab_1.git ```

در این پروژه همانطور که در دستور کار نیز گفته شده است یک فایل .gitignore قرار داده‌ایم که از قرار دادن فایل‌های css و js مرتبط به bootstrap، popper و jQuery روی گیت جلوگیری کرده‌ایم زیرا می‌توان به راحتی آن‌‌ها را دانلود کرد و در مسیر مشخص شده قرار می‌دهیم. 

برای فایل jquery-3.3.1.slim.min.js با استفاده از [این لینک](https://code.jquery.com/jquery-3.3.1.slim.min.js) فایل مورد نظر را دانلود کرده و در مسیر ``` /assets/js/ ``` قرار می‌دهیم.

برای فایل popper.min.js با استفاده از [این لینک](https://gist.github.com/saikat19/1eba45414acf6d8bd83685a2ef7ae510) فایل مورد نظر را دانلود کرده و در مسیر ``` /assets/js/ ``` قرار می‌دهیم.

برای فایل‌های bootstrap.min.css.map و bootstrap.min.css با استفاده از [این لینک](https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip) فایل‌های مورد نظر را از فولدر css  دانلود کرده و در مسیر ``` /assets/css/ ``` قرار می‌دهیم.

برای فایل‌های bootstrap.min.js.map و bootstrap.min.js با استفاده از [این لینک](https://github.com/twbs/bootstrap/releases/download/v4.5.3/bootstrap-4.5.3-dist.zip) فایل‌های مورد نظر را از فولدر js  دانلود کرده و در مسیر ``` /assets/js/ ``` قرار می‌دهیم.

برای فایل font-awesome.css با استفاده از [این لینک](https://fontawesome.com/v4/assets/font-awesome-4.7.0.zip) فایل مورد نظر از فولدر css را دانلود کرده و در مسیر ``` /assets/css/ ``` قرار می‌دهیم.

برای فایل fontawesome-webfont.woff2 با استفاده از [این لینک](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2) فایل مورد نظر را دانلود کرده و در مسیر ``` /assets/fonts/ ``` قرار می‌دهیم.

در نهایت با باز‌ کردن index.html صفحه مورد نظر با فانکشنالیتی‌ها گفته شده بالا می‌آید.

## مراحل انجام آزمایش

ابتدا ریپوزیتوری جدید ایجاد می‌کنیم سپس یک فایل .gitignore در کنار آن قرار می‌دهیم که در آن مسیر فایل‌های مورد نیاز برای کتابخانه‌های مورد استفاده را قرار می‌دهیم زیرا این فایل‌ها به راحتی قابل دانلود هستند (با استفاده از توضیحات مربوط به بخش اجرای پروژه می‌توان این فایل‌ها را دانلود کرد بنابراین نیازی به قرار دادن آن‌ها روی گیت نمی‌باشد.

تمام کامیت‌های پروژه کاملا مبتنی بر استاندارد [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) است. 

در این پروژه هفت شاخه دیگر در کنار شاخه اصلی یعنی ``` main ``` وجود دارد. که این شاخه‌های به صورت ``` .../feat ``` و ``` .../fix ``` است. یک شاخه ``` dev ``` داریم که تمام شاخه‌های ``` .../feat ``` از آن گرفته می‌شود و در نهایت آن شاخه‌ها با ``` dev ``` مرج می‌شوند و در مرحله پایانی به صورت pull request با شاخه اصلی مرج می‌شوند.
لازم به ذکر است که تمام شاخه‌هایی که با feat شروع می‌شوند به منظور ایجاد یک feature هستند و تمام شاخه‌هایی که با fix شروع می‌شوند به منظور رفع یک باگ در پروژه هستند. شاخه‌هایی که به منظور fix هستند را می‌توان از شاخه dev یا master بسته به شرایط گرفت. در پروژه ما از آنجا که بعد از مرج شدن با شاخه اصلی متوجه باگ شدیم این شاخه را از main گرفتیم.

برای محافظت شاخه اصلی همانطور که در دستورکار گفته شده است آن را به گونه‌ای محافظت می‌کنیم که تنها امکان مرج کردن با آن از تنها از طریق pull request امکان پذیر است. همانطور که در تصویر زیر مشخص است برای این شاخه rule ای ست شده است که تنها با pull request امکان مرج کردن وجود دارد.

![](https://user-images.githubusercontent.com/59199865/224272554-1dbc706b-31ce-4ed9-91b9-c59dc3720284.png)

و در نهایت در بخش branch همان‌طور که در تصویر زیر مشخص است در کنار شاخه اصلی یعنی main یک علامت به منظور اینکه برای آن rule ست شده است، قرار دارد.

![](https://user-images.githubusercontent.com/59199865/224273477-90890984-f6e5-4578-b981-301fea3285dd.png)

تصویر زیر هنگام مرج کردن شاخه dev با main از طریق pull request است.

![](https://user-images.githubusercontent.com/59199865/224276717-6b633e2f-d248-4869-816b-d4b04c6b6a56.jpg)

همان‌طور که قبل‌تر گفته شد تمام شاخه‌‌هایی که با feat شروع می‌شوند از dev گرفته شده‌اند و در نهایت با همان شاخه dev مرج می‌شوند. برای مرج کردن از دستور زیر استفاده می‌کنیم

``` git merge --no-ff branch_name ```

که پرچم ```--no-ff``` باعث می‌شود تا مرج کردن یک کامیت جدید ایجاد کند حتی در صورتی که مرج به صورت fast forward صورت بگیرد. بدین ترتیب می‌توان تاریخچه شاخه feature را از بین نبرد.
لازم به ذکر است که عملیات ادغام را از طریق ترمینال و بدون استفاده از IDE انجام دادیم.

در پروژه نیز به چندین کانفلیکت هنگام مرج کردن خوردیم که نمونه‌ای از آن در تصویر زیر مشخص است. سپس این کانفیلیکت‌ها را حل کرده و مرج کردیم.

![](https://user-images.githubusercontent.com/59199865/224277412-fcb2acd0-5fb8-42ba-a0a5-0bfa6b373c81.jpeg)
 
 همچنین نمونه‌‌ای دیگر از آن هنگام مرج کردن با main رخ داد. به بیانی دیگر امکان اینکه pull request را مرج کنیم نبود و مانند تصویر زیر نیاز بود تا ابتدا کانفلیکت را حل کنیم.
 
 ![](https://user-images.githubusercontent.com/59199865/224415115-bdd94d8f-98db-4d57-8698-e9d3c7143082.jpg)
 
 برای حل به صورت زیر عمل کردیم. آن از آنجا که تغییراتی در main رخ داده بود که در شاخه مورد نظر اعمال نشده بود بدین صورت عمل کردیم که به شاخه مورد نظر رفته و آن را با main مرج کرده و کانفلیکت آن را حل کردیم و در نهایت پوش کردیم. بدین صورت کانفلیکت در pull request از بین رفت.
 
 ![](https://user-images.githubusercontent.com/59199865/224415866-a305db81-fa2a-44e4-9955-90278f393208.jpg)


## پرسش‌ها

1. پوشه .git چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

    > در دایرکتوری‌های متصل به گیت این پوشه حاوی تمام اطلاعات مورد نیاز برای ذخیره‌سازی و ساماندهی ورژن‌های فایل‌های آن دایرکتوری توسط گیت است. تاریخچه‌ی کامیت‌های انجام‌شده،‌اطلاعات ریپازیتوری‌های ریموت، اشیاء hash شده‌ی فایل‌ها، کامیت‌ها و درخت زیرپوشه‌ها، اطلاعات امنیتی،‌ کانفیگ‌های مختلف و توضیحات دیگر همه و همه در این پوشه در قالب زیرپوشه‌های  دیگر نگه‌داری میشوند. 
این پوشه را توسط دستور `git init` میتوان ایجاد کرد.

2. منظور از atomic بودن در atomic commit و atomic pull-request چیست؟

    > اتمیک بودن به طور کلی به معنای تک ذره‌ای، تک منظوره و جزء ناپذیر بودن است. کامیت اتمی به این معناست که به گونه‌ای ساخته شود که تنها نشان‌دهنده‌ی یک تغییر (فیچر، باگ فیکسینک و ..) کوچک و کاهش ناپذیر باشد. همین مفهوم در موقع تحویل یا delivery در هنگام pull-request نیز صادق است. ارزش (value)ای که قرار است در هر pull request به محصول اضافه شود باید تک منظوره، سطح پایین (low level) و خالص باشد به طوری که مجموعه‌ای از pull requestها یک دغدغه‌ی سطح بالاتر را حل کنند.
    هدف از این ویژگی برای کامیت و pull request این است که فرایند دیباگینگ و بازگرداندن تغییرات و دلیوری‌ها آسان‌تر شود و توسعه‌ی نرم‌افزار ساختار بهتری به خود بگیرد.
3. تفاوت دستورهای fetch و pull و merge را بیان کنید. 

    >![image](https://i.stack.imgur.com/nWYnQ.png)
    دستور fetch محتویات ریپازیتوری ریموت را به لوکال منتقل میکند ولی در فایل‌های موجود تغییری ایجاد نمیکند‌(تنها تاریخچه‌ی تمام کامیت‌ها و تغییرات  یا به عبارتی آبجکت‌ها و رفرنس‌های ریموت را میگیرد.)
    دستور pull علاوه بر اینکار آخرین تغییرات را بر  فایل‌ها اعمال میکند یا به عبارتی merge میکند. دستور merge در کنار fetch معادل دستور pull است.
4. تفاوت چهار دستور reset و revert و rebase و restore را بیان کنید.
 
   > برای بازگرداندن تغییرات اعمال شده در کامیت در گیت، `git reset` تا کامیت مشخص شده تغییرات را برگردانده و HEAD را به آن کامیت میبرد و کامیت‌های بعدی را حذف میکند در حالی که `git revert` یک کامیت جدید میزند که وارونه‌ی تغییرات مشخص شده را در بردارد و تاریخچه‌ی کامیت‌ها را کم نمی‌کند. 
   `git rebase` ابتدای برنچ را به کامیت مورد نظر میبرد معادل اینکه برنچ از آن کامیت خاص شروع شده باشد در نتیجه بر خلاف دو دستور قبل کد و محتوای فایل‌های در حال دولوپ تغییر نمیکند. `git restore` هم برای بازگرداندن فایل‌ها از گیت ایندکس یا کامیت‌های دیگر بکار میرود و برنچ را تغییر نمیدهد.
5. منظور از stage چیست؟ دستور stash چه کاری را انجام می‌دهد؟

   > منظور از stage یک مرحله قبل از کامیت است. به این معنا که یک کامیت در گیت در دو مرحله staging و کامیت واقعی انجام می‌شود. `stage files` به فایل‌هایی گفته می‌شود که پیش از کامیت کردن فایل‌های تغییر یافته با دستور `git add` به آن منتقل می‌شوند. با دستور `git commit` تمام فایل‌هایی که به stage اضافه شده‌اند، کامیت خواهند شد. دستور `git stash‍‍` نیز تغییرات اعمال شده که کامیت نشده باشند را به فضایی از جنس stack می‌برد و در خود حفظ می‌کند. به طوری که می‌توان بعدا این تغییرات را برگرداتد و به نسخه کد اعمال کرد.

6. مفهوم snapshot به چه معناست؟

    > از آنجایی که گیت ابزاری برای مدیریت ورژن است، برای ساخت ذخیره‌ی ورژنی از کد و نامگذاری آن میتوان با git stanpshot کپی از وضعیت فعلی را در .git ذخیره کرد و به آن یک ورژن اختصاص داد.


