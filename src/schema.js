//Validasyon şeması
//yup kullanarak doğrulama şeması oluştur
//şemalar nesnelerin yapısını ve bu nesnelerin her bir alanı için geçerli doğrulama kurallarının tanıtılmasını sağlar

//import ederken tek tek string positive object gibi doğrulama fonksiyonlarını tektek yapma * isim şeklinde yap
import * as yup from "yup";

// REGEX Kuralları: en az
// 1 büyük harf
// 1 küçük harf
// 1 rakam
// 1 özel karakter
// min 5 karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

//formun stateini tuttuğumuz nesnenin her bir alanını geçerli olması için gerekli olan koşulları ifade etmemizi sağlar
const schema = yup.object().shape({
  //email alanının geçerli olması için gerekli olan koşullar
  email: yup
    .string()
    .required("Email alanı zorunludur")
    .email("Email formatı doğru değil"),
  //age alanının geçerli olması için gerekli olan koşullar
  age: yup
    .number()
    .positive()
    .integer("Yaş değeri tam sayı olmalı")
    .min(18, "Yaş 18`den küçük olamaz")
    .max(100, "Yaş 100den büyük olamaz")
    .required("Yaş alanı zorunludur"),

  //pasword alanının geçerli olması için gerekli koşullar
  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalı")
    //marches inputa girilen karakterlerin regexteki koşullara uygunluğunu kontrol eder
    .matches(
      regex,
      "Şifre en az 1 büyük har 1 küçük harf 1 rakam ve 1 özel karakter içermeli"
    ),

  //paswordConfirm alanı için gerekli koşullar
  //oneOf:metin dizideki elemanlardan biri ile aynı mı  .oneOf(['selam','merhaba'])
  //ref: nesnenin farklı bir değerini çağırır
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "doğrulama şifresi asıl şifreyle eşleşmiyor")
    .required("Lütfen şifrenizi doğrulayın"),
});
export { schema };
