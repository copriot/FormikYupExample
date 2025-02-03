//Validasyon şeması
//yup kullanarak doğrulama şeması oluştur
//şemalar nesnelerin yapısını ve bu nesnelerin her bir alanı için geçerli doğrulama kurallarının tanıtılmasını sağlar

//import ederken tek tek string positive object gibi doğrulama fonksiyonlarını tektek yapma * isim şeklinde yap
import * as yup from "yup";
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
});
export { schema };
