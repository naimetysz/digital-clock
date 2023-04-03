const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

function tiktak(){
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();
    sec.style.transform = `rotate(${180 + (second*6)}deg)`
    min.style.transform = `rotate(${180 + (minute*6)}deg)`
    hours.style.transform = `rotate(${180 + (hour*6)}deg)`
}
setInterval(tiktak,1000);
// Bu kod, tiktak adlı bir fonksiyonu her saniyede bir kez çağırmak için JavaScript'in setInterval() metodunu kullanır. setInterval() metodu, belirtilen zaman aralıklarıyla bir fonksiyonu tekrar tekrar çalıştırmak için kullanılır.

// Burada, tiktak fonksiyonu, analog bir saatin saniye, dakika ve saat ibrelerinin hareketini hesaplamak ve güncellemek için kullanılır. Bu nedenle, setInterval() metodu, analog saatin sürekli olarak güncellenmesini sağlar.

// 1000 argümanı, setInterval() metodunun fonksiyonu kaç milisaniyede bir çağırmak gerektiğini belirtir. Bu durumda, 1000 milisaniye veya 1 saniye olarak belirtilir. Bu sayede, her saniye tiktak fonksiyonu çalıştırılır ve analog saat güncellenir.
// Bu kod bir analog saat oluşturmak için JavaScript kullanıyor.

// İlk olarak, new Date() metodu kullanılarak şu anki tarih ve saat alınır. Daha sonra getSeconds(), getMinutes(), ve getHours() metodları kullanılarak saniye, dakika ve saatler ayrı ayrı alınır.

// Sonrasında, sec, min, ve hours adlı HTML elementlerinin stili değiştiriliyor. style.transform özelliği kullanılarak, elementlerin dönme açıları hesaplanır ve derece (degree) olarak ifade edilir.

// Saniye, dakika ve saat için 6 derecelik bir dönüş kullanılmıştır. Bu, analog bir saatin işleyişi için kullanılan yaygın bir yöntemdir. Ayrıca, 180 + ifadesi, elementlerin başlangıç ​​açısının ayarlanması için kullanılır.

// Sonuç olarak, bu kod, her saniyede saniye ibresinin dönüş açısını güncelleyen, dakika ve saat ibrelerinin dönüş açılarını da aynı şekilde güncelleyen bir analog saat yaratır. Bu kod, HTML'deki ilgili elementlerin doğru adlandırıldığı varsayımıyla birlikte kullanılabilir.