﻿## Теоретичне питання

1.VAR – Тип змінної, що вноситься в оперативну пам’ять, ще перед ініціалізацією зі значенням - undefined. Може бути переініціалізована та перезаписана в блоці пам’яті. var x = 1; x = 2; – переініціалізація.       var x = 1; var x = 2; – перезапис. 

2.LET – Тип змінної, що вноситься в оперативну пам’ять, лише після ініціалізації, попереднє використання – неможливе. Може бути переініціалізована, але не може бути перезаписана в блоці пам’яті.

3.CONST – Тип змінної, що вноситься в оперативну пам’ять, лише після ініціалізації, попереднє використання – неможливе. Не може бути переініціалізована, та перезаписана в блоці пам’яті.

4.Використання VAR не рекомендується з причин можливого перезапису блоку пам’яті (погіршення оптимізації) та через можливість підняття без ініціалізації – появлення більшої кількості помилок в коді.





