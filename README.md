# TaskFlow – Görev ve Proje Yönetim Sistemi API

## Proje Hakkında

TaskFlow, görevlerin oluşturulması, listelenmesi, görüntülenmesi, güncellenmesi ve silinmesi işlemlerini gerçekleştirmek amacıyla geliştirilmiş bir REST API projesidir.

Proje, Node.js ve Express.js kullanılarak geliştirilmiştir.

## Kullanılan Teknolojiler

- Node.js
- Express.js
- JavaScript
- Postman

## Proje Yapısı

taskflow/
├── routes/
│   └── tasks.js
├── index.js
├── package.json
├── package-lock.json
└── README.md


## Kurulum

Gerekli Paketlerin Yüklenmesi

VS Code içerisinde TaskFlow proje klasörünü açın.

Üst menüden Terminal → New Terminal seçeneğine tıklayın.

Açılan terminal PowerShell ise terminalin sağ üst kısmındaki profil menüsünden Command Prompt (CMD) seçeneğini seçin.

Açılan terminale aşağıdaki komutu yazıp Enter tuşuna basın:

npm install

Bu komut, package.json dosyasında belirtilen gerekli paketleri yükler.

Not: Komutun doğru çalışması için terminalin TaskFlow ana proje klasöründe açık olması gerekir.
## Çalıştırma

Projeyi başlatmak için:
Projeyi çalıştırmak için VS Code içerisinde Terminal bölümünü açın ve aşağıdaki komutu girerek Enter tuşuna basın:

node index.js

Komut çalıştırıldığında TaskFlow API sunucusu http://localhost:3000 adresinde aktif hâle gelecektir.

Sunucu çalıştığı sürece terminal açık tutulmalıdır. 

API istekleri Postman üzerinden gönderilebilir ve sonuçlar Postman aracılığıyla kontrol edilebilir.

Sunucuyu durdurmak için VScode terminalde Ctrl + C tuşlarına basabilirsiniz.

Sunucu şu adreste çalışır:

`http://localhost:3000`

## API Endpointleri

| HTTP Method | Endpoint | Açıklama |

| POST | /tasks | Yeni görev oluşturur. 

| GET | /tasks | Tüm görevleri listeler. |

| GET | /tasks/:id | ID ile görev getirir. |

| PUT | /tasks/:id | Görevi günceller. |

| DELETE | /tasks/:id | Görevi siler. |

## Logger Middleware

Logger Middleware, gelen HTTP isteklerinin metodunu, adresini ve tarih-saat bilgisini terminale yazdırır.

## Veri Saklama

Görev verileri uygulama içerisinde geçici olarak bir JavaScript dizisinde tutulmaktadır. Sunucu yeniden başlatıldığında oluşturulan görevler sıfırlanır.

## Test

API endpointleri Postman kullanılarak test edilmiştir. Görev oluşturma, listeleme, detay görüntüleme, güncelleme ve silme işlemleri başarıyla çalışmaktadır. Silinen göreve erişildiğinde 404 Not Found (Görev Bulunamadı.) yanıtı alınmaktadır.