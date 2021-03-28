const firstDiv = document.querySelector(".firstDiv");
const secondDiv = document.querySelector(".secondDiv");
const codeRadio = document.getElementById("codeRadio");
const bankRadio = document.getElementById("bankRadio");
const isBank = document.querySelector(".isBank");
const isBankInnerHTML = `<label for="renewed">Yenileme</label>
<input type="radio" name="bankRadio2" id="renewed" onclick="isBankChoice()">
<label for="firstPurchase">İlk Çekim</label>
<input type="radio" name="bankRadio2" id="firstPurchase" onclick="isBankChoice()">`;
const codeFormContainer = document.querySelector(".codeFormContainer");
const codeFormContainerInnerHTML = `<form class="codeForm">
<label for="codeInput">Promosyon Kodunu Giriniz: </label>
<input type="text" id="codeInput"/>
<input type="button" value="Gönder" onclick="codeSubmit()">
</form>`;
const bankFormContainer = document.querySelector(".bankFormContainer");
const bankFormRenewed = `<form class="bankFormRenewed">
<label for="senderName">Gönderen Adı: </label>
<input type="text" id="senderName" placeholder="Örneğin; Selma Hanım"><br>
<label for="customerName">Müşteri Adı: </label>
<input type="text" id="customerName" placeholder="Örneğin; Ahmet"><br>
<label for="customerSurname">Müşteri Soyadı: </label>
<input type="text" id="customerSurname" placeholder="Örneğin; Yılmaz"><br>
<label for="customerEmail">Müşteri E-posta: </label>
<input type="text" id="customerEmail" placeholder="Örneğin; ahmet.yilmaz@email.com"><br>
<label for="registerDate">Üye Olma Tarihi: </label>
<input type="text" id="registerDate" placeholder="Örneğin; 02/05/2020"><br>
<label for="packageName">Paket Adı: </label>
<input type="text" id="packageName" placeholder="Örneğin; Aylık Paket"><br>
<label for="packagePrice">Paket Ücreti: </label>
<input type="text" id="packagePrice" placeholder="Örneğin; 17,99"><br>
<label for="paymentDate">Ödeme Alınan Tarih: </label>
<input type="text" id="paymentDate" placeholder="Örneğin; 12/06/2020"><br>
<label>İtiraz edilen tarihte izleme geçmişi var mı?</label><br>
<label for="yes">Var</label><input type="radio" name="watchHistory" id="yes">
<label for="no">Yok</label><input type="radio" name="watchHistory" id="no"><br>
<input type="button" value="Gönder" onclick="renewedSubmit()">
</form>`;
const bankFormFirstPurchase = `<form class="bankFormFirstPurchase">
<label for="senderName">Gönderen Adı: </label>
<input type="text" id="senderName" placeholder="Örneğin; Selma Hanım"><br>
<label for="customerName">Müşteri Adı: </label>
<input type="text" id="customerName" placeholder="Örneğin; Ahmet"><br>
<label for="customerSurname">Müşteri Soyadı: </label>
<input type="text" id="customerSurname" placeholder="Örneğin; Yılmaz"><br>
<label for="customerEmail">Müşteri E-posta: </label>
<input type="text" id="customerEmail" placeholder="Örneğin; ahmet.yilmaz@email.com"><br>
<label for="registerDate">Üye Olma Tarihi: </label>
<input type="text" id="registerDate" placeholder="Örneğin; 02/05/2020"><br>
<label for="packageName">Paket Adı: </label>
<input type="text" id="packageName" placeholder="Örneğin; Aylık Paket"><br>
<label>İtiraz edilen tarihte izleme geçmişi var mı?</label><br>
<label for="yes">Var</label><input type="radio" name="watchHistory" id="yes">
<label for="no">Yok</label><input type="radio" name="watchHistory" id="no"><br>
<input type="button" value="Gönder" onclick="firstPurchaseSubmit()">
</form>`;
const promoCodeContainer = `<div class="promoCodeContainer">
<p>Merhaba,<br>Kampanyamıza gösterdiğiniz ilgiye teşekkür ederiz. Kampanyadan yararlanmanız için kullanmanız
    gereken promosyon kodu; <span class="promoCodeSpan"
        style="color: red; font-weight: bold; font-size: x-large;"></span></p>
<h3>Kampanyadan nasıl yararlanabilirsiniz;</h3>
<ul>
    <li><a href="www.ssportplus.com">www.ssportplus.com</a> adresinden üye ol linkine tıklayın</li>
    <li>Açılan sayfada kişisel bilgilerinizi girip ÜYE OL butonuna tıklayın.</li>
    <li>Aşağıda yer alan promosyon kodu alanına size verilen kodu yazıp KULLAN butonuna basın.</li>
    <li>Son olarak kart bilgilerinizi girerek aboneliğinizi tamamlayabilirsiniz.</li>
</ul>
<img src="https://i.hizliresim.com/XtdqwX.png">
<p>Saygılarımızla</p>
</div>`;
const bankContainerRenewedWatch = `<div class="bankContainer">
<div class="bankRenewed">
    <p>Merhaba <span class="senderName"></span>,<br><br>
        Talep ettiğiniz bilgiler aşağıda ve ekte yer almaktadır.</p>
    <ul>
        <li>Müşterimiz <span class="customerName">customerName</span> <span
                class="customerSurname">customerSurname</span> adıyla, <span
                class="customerEmail">customerEmail</span> e-posta adresiyle <span
                class="registerDate">registerDate</span> tarihinde <a
                href="https://www.ssportplus.com/">www.ssportplus.com</a> adresinden üye olmuştur.
        </li>
        <li>Üye olma aşamasında <a
                href="https://app.ssportplus.com/account/signup">app.ssportplus.com/account/signup</a>
            adresinde
            kendisiyle ÖN BİLGİLENDİRME FORMU ve MESAFELİ SATIŞ VE ABONELİK SÖZLEŞMESİ linkleri paylaşılmış
            ve
            kabul ettiğine dair onay alınmıştır. Sayfanın görseli ektedir.</li>
        <li>Müşterinin <span class="packageName">packageName</span> yenilenen S Sport Plus aboneliği
            bulunmaktadır. </li>
        <li><b>Mesafeli satış ve abonelik sözleşmesinin 2.3 nolu maddesinde</b> <span
                class="packageName">packageName</span> paketinin tanımı
            yer
            almaktadır ve taraflardan herhangi biri fesih etmedikçe aboneliğin devam edeceği bilgisi bu
            maddede
            paylaşılmaktadır. </li>
        <li><b>Yine aynı sözleşmenin Madde 6. Ücretli İçerik Hizmeti maddesinde</b> müşterinin aboneliğini
            iptal
            etmemesi halinde paket ücretinin tahsil edileceği bilgisi yer almaktadır. </li>
        <li>Üyelik aşamasında müşteriye sunulan <b>Ön Bilgilendirme Formunda 2. ve 3. maddede</b> bu
            bilgiler
            yine
            yer almaktadır.</li>
        <li>Ayrıca Hizmet Sağlayıcı tarafından sağlanacak olan S Sport Plus İçerik Hizmeti, niteliği
            itibariyle elektronik ortamda anında ifa ve teslim edilen gayri-maddi mal niteliğinde bir hizmet
            olması sebebiyle TC. Gümrük ve Ticaret Bakanlığı <b>Mesafeli Sözleşmeler Yönetmeliği madde 15/ğ
                kapsamına girdiği için cayma hakkına girmemektedir.</b> (ekte sözleşmeyi görebilirsiniz.)
        </li>
        <li>Müşteri <span class="packageName">packageName</span> Abonelik Paketi satın aldıktan sonra
            herhangi
            bir iptal talebi olmamış bu
            nedenle <span class="paymentDate">paymentDate</span> tarihinde devam eden dönemin <span
                class="packageName">packageName</span> ücreti
            olan <span class="packagePrice">packagePrice</span>₺ ücret
            tahsil edilmiştir.</li>
        <li>Kullanıcı aboneliğinin yenilendiği <span class="paymentDate">paymentDate</span> tarihinden sonra
            ekte
            yer alan izleme geçmişinde de görüldüğü üzeri yayınlarımızı izlemiştir.</li>
        <li>Sözleşmelerin nüshaları ekte, web adresleri aşağıdaki gibidir;
            <ul style="list-style: none;">
                <li>Ön Bilgilendirme Formu: <a
                        href="https://www.ssportplus.com/kullanim-kosullari/#on-bilgilendirme-formu">www.ssportplus.com/kullanim-kosullari/#on-bilgilendirme-formu</a>
                </li>
                <li>Mesafeli Satış Sözleşmesi: <a
                        href="https://www.ssportplus.com/mesafelisatisformu/">www.ssportplus.com/mesafelisatisformu</a>
                </li>
            </ul>
        </li>
    </ul>
    <p>İyi çalışmalar dilerim.</p>
</div>
</div>`;
const bankContainerRenewed = `<div class="bankContainer">
<div class="bankRenewed">
    <p>Merhaba <span class="senderName"></span>,<br><br>
        Talep ettiğiniz bilgiler aşağıda ve ekte yer almaktadır.</p>
    <ul>
        <li>Müşterimiz <span class="customerName">customerName</span> <span
                class="customerSurname">customerSurname</span> adıyla, <span
                class="customerEmail">customerEmail</span> e-posta adresiyle <span
                class="registerDate">registerDate</span> tarihinde <a
                href="https://www.ssportplus.com/">www.ssportplus.com</a> adresinden üye olmuştur.
        </li>
        <li>Üye olma aşamasında <a
                href="https://app.ssportplus.com/account/signup">app.ssportplus.com/account/signup</a>
            adresinde
            kendisiyle ÖN BİLGİLENDİRME FORMU ve MESAFELİ SATIŞ VE ABONELİK SÖZLEŞMESİ linkleri paylaşılmış
            ve
            kabul ettiğine dair onay alınmıştır. Sayfanın görseli ektedir.</li>
        <li>Müşterinin <span class="packageName">packageName</span> yenilenen S Sport Plus aboneliği
            bulunmaktadır. </li>
        <li><b>Mesafeli satış ve abonelik sözleşmesinin 2.3 nolu maddesinde</b> <span
                class="packageName">packageName</span> paketinin tanımı
            yer
            almaktadır ve taraflardan herhangi biri fesih etmedikçe aboneliğin devam edeceği bilgisi bu
            maddede
            paylaşılmaktadır. </li>
        <li><b>Yine aynı sözleşmenin Madde 6. Ücretli İçerik Hizmeti maddesinde</b> müşterinin aboneliğini
            iptal
            etmemesi halinde paket ücretinin tahsil edileceği bilgisi yer almaktadır. </li>
        <li>Üyelik aşamasında müşteriye sunulan <b>Ön Bilgilendirme Formunda 2. ve 3. maddede</b> bu
            bilgiler
            yine
            yer almaktadır.</li>
        <li>Ayrıca Hizmet Sağlayıcı tarafından sağlanacak olan S Sport Plus İçerik Hizmeti, niteliği
            itibariyle elektronik ortamda anında ifa ve teslim edilen gayri-maddi mal niteliğinde bir hizmet
            olması sebebiyle TC. Gümrük ve Ticaret Bakanlığı <b>Mesafeli Sözleşmeler Yönetmeliği madde 15/ğ
                kapsamına girdiği için cayma hakkına girmemektedir.</b> (ekte sözleşmeyi görebilirsiniz.)
        </li>
        <li>Müşteri <span class="packageName">packageName</span> Abonelik Paketi satın aldıktan sonra
            herhangi
            bir iptal talebi olmamış bu
            nedenle <span class="paymentDate">paymentDate</span> tarihinde devam eden dönemin <span
                class="packageName">packageName</span> ücreti
            olan <span class="packagePrice">packagePrice</span>₺ ücret
            tahsil edilmiştir.</li>
        <li>Sözleşmelerin nüshaları ekte, web adresleri aşağıdaki gibidir;
            <ul style="list-style: none;">
                <li>Ön Bilgilendirme Formu: <a
                        href="https://www.ssportplus.com/kullanim-kosullari/#on-bilgilendirme-formu">www.ssportplus.com/kullanim-kosullari/#on-bilgilendirme-formu</a>
                </li>
                <li>Mesafeli Satış Sözleşmesi: <a
                        href="https://www.ssportplus.com/mesafelisatisformu/">www.ssportplus.com/mesafelisatisformu</a>
                </li>
            </ul>
        </li>
    </ul>
    <p>İyi çalışmalar dilerim.</p>
</div>
</div>`;
const bankContainerFirstPurchaseWatch = `<div class="bankContainer">
<div class="bankFirstPurchase">
    <p>Merhaba <span class="senderName"></span>,<br><br>
        Talep ettiğiniz bilgiler aşağıda ve ekte yer almaktadır.</p>
    <ul>
        <li>Müşterimiz <span class="customerName">customerName</span> <span
                class="customerSurname">customerSurname</span> adıyla, <span
                class="customerEmail">customerEmail</span>
            e-posta adresiyle <span class="registerDate">registerDate</span> tarihinde <a
                href="https://www.ssportplus.com/">www.ssportplus.com</a> adresinden üye olmuştur.
        </li>
        <li>Üye olma aşamasında <a
                href="https://app.ssportplus.com/account/signup">app.ssportplus.com/account/signup</a>
            adresinde
            kendisiyle ÖN BİLGİLENDİRME FORMU ve MESAFELİ SATIŞ VE ABONELİK SÖZLEŞMESİ linkleri paylaşılmış
            ve
            kabul ettiğine dair onay alınmıştır. Sayfanın görseli ektedir.</li>
        <li>Müşterinin <span class="packageName">packageName</span> yenilenen S Sport Plus aboneliği
            bulunmaktadır. </li>
        <li><b>Mesafeli satış ve abonelik sözleşmesinin 2.3 nolu maddesinde</b> <span
                class="packageName">packageName</span> paketinin tanımı
            yer
            almaktadır ve taraflardan herhangi biri fesih etmedikçe aboneliğin devam edeceği bilgisi bu
            maddede
            paylaşılmaktadır. </li>
        <li><b>Yine aynı sözleşmenin Madde 6. Ücretli İçerik Hizmeti maddesinde</b> müşterinin aboneliğini
            iptal
            etmemesi halinde paket ücretinin tahsil edileceği bilgisi yer almaktadır. </li>
        <li>Üyelik aşamasında müşteriye sunulan <b>Ön Bilgilendirme Formunda 2. ve 3. maddede</b> bu
            bilgiler
            yine
            yer almaktadır.</li>
        <li>Ayrıca Hizmet Sağlayıcı tarafından sağlanacak olan S Sport Plus İçerik Hizmeti, niteliği
            itibariyle elektronik ortamda anında ifa ve teslim edilen gayri-maddi mal niteliğinde bir hizmet
            olması sebebiyle TC. Gümrük ve Ticaret Bakanlığı <b>Mesafeli Sözleşmeler Yönetmeliği madde 15/ğ
                kapsamına girdiği için cayma hakkına girmemektedir.</b> (ekte sözleşmeyi görebilirsiniz.)
        </li>
        <li>Kullanıcı aboneliğini satın aldığı <span class="registerDate">registerDate</span> tarihinden sonra
            ekte
            yer alan izleme geçmişinde de görüldüğü üzeri yayınlarımızı izlemiştir.</li>
        <li>Sözleşmelerin nüshaları ekte, web adresleri aşağıdaki gibidir;
            <ul style="list-style: none;">
                <li>Ön Bilgilendirme Formu: <a
                        href="https://www.ssportplus.com/kullanim-kosullari/#on-bilgilendirme-formu">www.ssportplus.com/kullanim-kosullari/#on-bilgilendirme-formu</a>
                </li>
                <li>Mesafeli Satış Sözleşmesi: <a
                        href="https://www.ssportplus.com/mesafelisatisformu/">www.ssportplus.com/mesafelisatisformu</a>
                </li>
            </ul>
        </li>
    </ul>
    <p>İyi çalışmalar dilerim.</p>
</div>
</div>`;
const bankContainerFirstPurchase = `<div class="bankContainer">
<div class="bankFirstPurchase">
    <p>Merhaba <span class="senderName"></span>,<br><br>
        Talep ettiğiniz bilgiler aşağıda ve ekte yer almaktadır.</p>
    <ul>
        <li>Müşterimiz <span class="customerName">customerName</span> <span
                class="customerSurname">customerSurname</span> adıyla, <span
                class="customerEmail">customerEmail</span>
            e-posta adresiyle <span class="registerDate">registerDate</span> tarihinde <a
                href="https://www.ssportplus.com/">www.ssportplus.com</a> adresinden üye olmuştur.
        </li>
        <li>Üye olma aşamasında <a
                href="https://app.ssportplus.com/account/signup">app.ssportplus.com/account/signup</a>
            adresinde
            kendisiyle ÖN BİLGİLENDİRME FORMU ve MESAFELİ SATIŞ VE ABONELİK SÖZLEŞMESİ linkleri paylaşılmış
            ve
            kabul ettiğine dair onay alınmıştır. Sayfanın görseli ektedir.</li>
        <li>Müşterinin <span class="packageName">packageName</span> yenilenen S Sport Plus aboneliği
            bulunmaktadır. </li>
        <li><b>Mesafeli satış ve abonelik sözleşmesinin 2.3 nolu maddesinde</b> <span
                class="packageName">packageName</span> paketinin tanımı
            yer
            almaktadır ve taraflardan herhangi biri fesih etmedikçe aboneliğin devam edeceği bilgisi bu
            maddede
            paylaşılmaktadır. </li>
        <li><b>Yine aynı sözleşmenin Madde 6. Ücretli İçerik Hizmeti maddesinde</b> müşterinin aboneliğini
            iptal
            etmemesi halinde paket ücretinin tahsil edileceği bilgisi yer almaktadır. </li>
        <li>Üyelik aşamasında müşteriye sunulan <b>Ön Bilgilendirme Formunda 2. ve 3. maddede</b> bu
            bilgiler
            yine
            yer almaktadır.</li>
        <li>Ayrıca Hizmet Sağlayıcı tarafından sağlanacak olan S Sport Plus İçerik Hizmeti, niteliği
            itibariyle elektronik ortamda anında ifa ve teslim edilen gayri-maddi mal niteliğinde bir hizmet
            olması sebebiyle TC. Gümrük ve Ticaret Bakanlığı <b>Mesafeli Sözleşmeler Yönetmeliği madde 15/ğ
                kapsamına girdiği için cayma hakkına girmemektedir.</b> (ekte sözleşmeyi görebilirsiniz.)
        </li>
        <li>Sözleşmelerin nüshaları ekte, web adresleri aşağıdaki gibidir;
            <ul style="list-style: none;">
                <li>Ön Bilgilendirme Formu: <a
                        href="https://www.ssportplus.com/kullanim-kosullari/#on-bilgilendirme-formu">www.ssportplus.com/kullanim-kosullari/#on-bilgilendirme-formu</a>
                </li>
                <li>Mesafeli Satış Sözleşmesi: <a
                        href="https://www.ssportplus.com/mesafelisatisformu/">www.ssportplus.com/mesafelisatisformu</a>
                </li>
            </ul>
        </li>
    </ul>
    <p>İyi çalışmalar dilerim.</p>
</div>
</div>`;
if (document.readyState == "loading" || document.readyState == "complete") {
    if (codeRadio.checked) {
        codeFormContainer.innerHTML = codeFormContainerInnerHTML;
    }
}

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}
const radioChoice = () => {
    if (codeRadio.checked) {
        codeFormContainer.innerHTML = codeFormContainerInnerHTML;
        isBank.innerHTML = "";
        bankFormContainer.innerHTML = "";
    }
    if (bankRadio.checked) {
        isBank.innerHTML = isBankInnerHTML;
        codeFormContainer.innerHTML = "";
    }
}
const isBankChoice = () => {
    const renewed = document.getElementById("renewed");
    const firstPurchase = document.getElementById("firstPurchase")
    if (renewed.checked) {
        bankFormContainer.innerHTML = bankFormRenewed;
    }
    if (firstPurchase.checked) {
        bankFormContainer.innerHTML = bankFormFirstPurchase;
    }
}
const codeSubmit = () => {
    const codeInput = document.getElementById("codeInput");
    secondDiv.innerHTML = promoCodeContainer;
    const promoCodeSpan = document.querySelector(".promoCodeSpan");
    promoCodeSpan.innerText = codeInput.value.toUpperCase();
    firstDiv.remove();
}
const renewedSubmit = () => {
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");
    const senderName = document.getElementById("senderName");
    const customerName = document.getElementById("customerName");
    const customerSurname = document.getElementById("customerSurname");
    const customerEmail = document.getElementById("customerEmail");
    const registerDate = document.getElementById("registerDate");
    const packageName = document.getElementById("packageName");
    const paymentDate = document.getElementById("paymentDate");
    const packagePrice = document.getElementById("packagePrice")
    if (yes.checked) {
        secondDiv.innerHTML = bankContainerRenewedWatch
        const senderNameQuery = document.querySelector(".senderName");
        const customerNameQuery = document.querySelector(".customerName");
        const customerSurnameQuery = document.querySelector(".customerSurname");
        const customerEmailQuery = document.querySelector(".customerEmail");
        const registerDateQuery = document.querySelector(".registerDate");
        const packageNameQuery = document.querySelectorAll(".packageName");
        const paymentDateQuery = document.querySelectorAll(".paymentDate");
        const packagePriceQuery = document.querySelector(".packagePrice")
        senderNameQuery.innerText = titleCase(senderName.value);
        customerNameQuery.innerText = titleCase(customerName.value);
        customerSurnameQuery.innerText = titleCase(customerSurname.value);
        customerEmailQuery.innerText = customerEmail.value;
        registerDateQuery.innerText = registerDate.value;
        packageNameQuery.forEach(e => {
            e.innerText = titleCase(packageName.value)
        })
        paymentDateQuery.forEach(e => {
            e.innerText = paymentDate.value;
        })
        packagePriceQuery.innerText = packagePrice.value;
        firstDiv.remove();
    } else if (no.checked) {
        secondDiv.innerHTML = bankContainerRenewed
        const senderNameQuery = document.querySelector(".senderName");
        const customerNameQuery = document.querySelector(".customerName");
        const customerSurnameQuery = document.querySelector(".customerSurname");
        const customerEmailQuery = document.querySelector(".customerEmail");
        const registerDateQuery = document.querySelector(".registerDate");
        const packageNameQuery = document.querySelectorAll(".packageName");
        const paymentDateQuery = document.querySelector(".paymentDate");
        const packagePriceQuery = document.querySelector(".packagePrice")
        senderNameQuery.innerText = titleCase(senderName.value);
        customerNameQuery.innerText = titleCase(customerName.value);
        customerSurnameQuery.innerText = titleCase(customerSurname.value);
        customerEmailQuery.innerText = customerEmail.value;
        registerDateQuery.innerText = registerDate.value;
        packageNameQuery.forEach(e => {
            e.innerText = titleCase(packageName.value)
        })
        paymentDateQuery.innerText = paymentDate.value;
        packagePriceQuery.innerText = packagePrice.value;
        firstDiv.remove();
    } else {
        alert('"İtiraz edilen tarihte izleme geçmişi var mı?" sorusunu yanıtlamalısınız!')
    }
}
const firstPurchaseSubmit = () => {
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");
    const senderName = document.getElementById("senderName");
    const customerName = document.getElementById("customerName");
    const customerSurname = document.getElementById("customerSurname");
    const customerEmail = document.getElementById("customerEmail");
    const registerDate = document.getElementById("registerDate");
    const packageName = document.getElementById("packageName");
    if (yes.checked) {
        secondDiv.innerHTML = bankContainerFirstPurchaseWatch
        const senderNameQuery = document.querySelector(".senderName");
        const customerNameQuery = document.querySelector(".customerName");
        const customerSurnameQuery = document.querySelector(".customerSurname");
        const customerEmailQuery = document.querySelector(".customerEmail");
        const registerDateQuery = document.querySelectorAll(".registerDate");
        const packageNameQuery = document.querySelectorAll(".packageName");
        senderNameQuery.innerText = titleCase(senderName.value);
        customerNameQuery.innerText = titleCase(customerName.value);
        customerSurnameQuery.innerText = titleCase(customerSurname.value);
        customerEmailQuery.innerText = customerEmail.value;
        registerDateQuery.forEach(e => {
            e.innerText = registerDate.value
        });
        packageNameQuery.forEach(e => {
            e.innerText = titleCase(packageName.value)
        })
        firstDiv.remove();
    } else if (no.checked) {
        secondDiv.innerHTML = bankContainerFirstPurchase
        const senderNameQuery = document.querySelector(".senderName");
        const customerNameQuery = document.querySelector(".customerName");
        const customerSurnameQuery = document.querySelector(".customerSurname");
        const customerEmailQuery = document.querySelector(".customerEmail");
        const registerDateQuery = document.querySelectorAll(".registerDate");
        const packageNameQuery = document.querySelectorAll(".packageName");
        senderNameQuery.innerText = titleCase(senderName.value);
        customerNameQuery.innerText = titleCase(customerName.value);
        customerSurnameQuery.innerText = titleCase(customerSurname.value);
        customerEmailQuery.innerText = customerEmail.value;
        registerDateQuery.forEach(e => {
            e.innerText = registerDate.value
        });
        packageNameQuery.forEach(e => {
            e.innerText = titleCase(packageName.value)
        })
        firstDiv.remove();
    } else {
        alert('"İtiraz edilen tarihte izleme geçmişi var mı?" sorusunu yanıtlamalısınız!')
    }

}