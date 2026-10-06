
"use strict";

// ================= INFORMATION DATA =================

// Information for village services in English and Hindi
const services = {
    healthcare: {
        title: "Healthcare",
        titleHindi: "स्वास्थ्य सेवा",
        description: "Find information about health centres, medical services and health camps.",
        descriptionHindi: "स्वास्थ्य केंद्रों, चिकित्सा सेवाओं और स्वास्थ्य शिविरों की जानकारी पाएँ।",
        extra: "Add the verified health centre address, opening hours and contact number for your village.",
        extraHindi: "अपने गाँव के स्वास्थ्य केंद्र का सत्यापित पता, खुलने का समय और संपर्क नंबर जोड़ें।",
        link: "https://mohfw.gov.in/"
    },

    education: {
        title: "Education",
        titleHindi: "शिक्षा",
        description: "Find information about schools, scholarships and learning opportunities.",
        descriptionHindi: "स्कूलों, छात्रवृत्तियों और शिक्षा के अवसरों की जानकारी पाएँ।",
        extra: "Contact the local school for admission details. Scholarship eligibility depends on the particular programme.",
        extraHindi: "प्रवेश की जानकारी के लिए स्थानीय विद्यालय से संपर्क करें। छात्रवृत्ति की पात्रता संबंधित योजना पर निर्भर करती है।",
        link: "https://scholarships.gov.in/"
    },

    agriculture: {
        title: "Agriculture",
        titleHindi: "कृषि",
        description: "Explore farming resources, agricultural services and farmer welfare information.",
        descriptionHindi: "खेती, कृषि सेवाओं और किसान कल्याण से संबंधित जानकारी पाएँ।",
        extra: "Contact the local agriculture office for crop advice and current scheme information.",
        extraHindi: "फसल संबंधी सलाह और योजनाओं की जानकारी के लिए स्थानीय कृषि कार्यालय से संपर्क करें।",
        link: "https://agriwelfare.gov.in/"
    },

    water: {
        title: "Water and Sanitation",
        titleHindi: "जल एवं स्वच्छता",
        description: "Learn about safe drinking water, sanitation and village water services.",
        descriptionHindi: "सुरक्षित पेयजल, स्वच्छता और गाँव की जल सेवाओं के बारे में जानें।",
        extra: "Contact the Gram Panchayat or relevant local department to report water supply problems.",
        extraHindi: "पानी की आपूर्ति से जुड़ी समस्या के लिए ग्राम पंचायत या संबंधित स्थानीय विभाग से संपर्क करें।",
        link: "https://jaljeevanmission.gov.in/"
    },

    public: {
        title: "Public Services",
        titleHindi: "सार्वजनिक सेवाएँ",
        description: "Learn about local administration, the Gram Panchayat and citizen services.",
        descriptionHindi: "स्थानीय प्रशासन, ग्राम पंचायत और नागरिक सेवाओं के बारे में जानें।",
        extra: "Add the verified Panchayat address, office hours and available services for your village.",
        extraHindi: "अपने गाँव की पंचायत का सत्यापित पता, कार्यालय का समय और उपलब्ध सेवाएँ जोड़ें।",
        link: "https://www.india.gov.in/"
    },

    business: {
        title: "Local Businesses",
        titleHindi: "स्थानीय व्यवसाय",
        description: "Discover local shops, markets and useful community services.",
        descriptionHindi: "स्थानीय दुकानों, बाज़ारों और उपयोगी सामुदायिक सेवाओं को जानें।",
        extra: "Add real business names, addresses and opening hours after verifying the details.",
        extraHindi: "जानकारी सत्यापित करने के बाद वास्तविक दुकानों के नाम, पते और खुलने का समय जोड़ें।",
        link: "https://www.incredibleindia.gov.in/"
    }
};


// Government scheme information
const schemes = {
    pmkisan: {
        title: "PM-KISAN",
        titleHindi: "पीएम-किसान",
        description: "PM-KISAN provides income support to eligible landholding farmer families. The scheme provides ₹6,000 per year in three equal instalments, subject to its rules.",
        descriptionHindi: "पीएम-किसान योजना के तहत पात्र भूमिधारक किसान परिवारों को नियमों के अनुसार प्रति वर्ष ₹6,000 की सहायता तीन समान किस्तों में दी जाती है।",
        extra: "Check current eligibility, exclusions and beneficiary status on the official portal.",
        extraHindi: "वर्तमान पात्रता, अपवाद और लाभार्थी की स्थिति आधिकारिक पोर्टल पर जाँचें।",
        link: "https://pmkisan.gov.in/"
    },

    pmay: {
        title: "PMAY-G",
        titleHindi: "प्रधानमंत्री आवास योजना - ग्रामीण",
        description: "PMAY-G is a rural housing programme intended to assist eligible rural households under government guidelines.",
        descriptionHindi: "पीएमएवाई-जी सरकारी दिशानिर्देशों के अंतर्गत पात्र ग्रामीण परिवारों को आवास सहायता देने वाला कार्यक्रम है।",
        extra: "Eligibility, selection and assistance depend on current official guidelines.",
        extraHindi: "पात्रता, चयन और सहायता वर्तमान आधिकारिक दिशानिर्देशों पर निर्भर करते हैं।",
        link: "https://pmayg.dord.gov.in/"
    },

    jaljeevan: {
        title: "Jal Jeevan Mission",
        titleHindi: "जल जीवन मिशन",
        description: "The mission focuses on improving access to safe drinking water through rural household tap connections and village water infrastructure.",
        descriptionHindi: "इस मिशन का उद्देश्य ग्रामीण घरों तक नल से जल की सुविधा और गाँवों की जल आपूर्ति व्यवस्था को बेहतर बनाना है।",
        extra: "Check current programme information and local implementation details on the official website.",
        extraHindi: "कार्यक्रम की वर्तमान जानकारी और स्थानीय कार्यान्वयन का विवरण आधिकारिक वेबसाइट पर देखें।",
        link: "https://jaljeevanmission.gov.in/"
    },

    scholarship: {
        title: "National Scholarship Portal",
        titleHindi: "राष्ट्रीय छात्रवृत्ति पोर्टल",
        description: "The portal provides information and application facilities for participating scholarship schemes.",
        descriptionHindi: "यह पोर्टल इसमें शामिल छात्रवृत्ति योजनाओं की जानकारी और आवेदन की सुविधाएँ प्रदान करता है।",
        extra: "Scholarship eligibility, documents and deadlines vary by scheme. Check the official portal.",
        extraHindi: "छात्रवृत्ति की पात्रता, दस्तावेज़ और अंतिम तारीखें योजना के अनुसार अलग-अलग होती हैं। आधिकारिक पोर्टल देखें।",
        link: "https://scholarships.gov.in/"
    }
};


// ================= OPEN INFORMATION POPUP =================

const popup = document.getElementById("infoPopup");

const closeButton = document.getElementById("closePopup");

const officialLink = document.getElementById("officialLink");

let previousFocus = null;


// This function displays information in the popup
function openPopup(info) {

    if (!info) {
        return;
    }

    previousFocus = document.activeElement;

    document.getElementById("popupTitle").innerText =
        info.title;

    document.getElementById("popupTitleHindi").innerText =
        info.titleHindi;

    document.getElementById("popupDescription").innerText =
        info.description;

    document.getElementById("popupDescriptionHindi").innerText =
        info.descriptionHindi;

    document.getElementById("popupExtra").innerText =
        info.extra;

    document.getElementById("popupExtraHindi").innerText =
        info.extraHindi;

    // Only show the official link if a URL is available
    if (info.link) {
        officialLink.href = info.link;
        officialLink.style.display = "inline-block";
    } else {
        officialLink.style.display = "none";
    }

    popup.classList.add("show");
    popup.setAttribute("aria-hidden", "false");

    closeButton.focus();
}


// ================= CLOSE POPUP =================

function closePopup() {

    popup.classList.remove("show");
    popup.setAttribute("aria-hidden", "true");

    // Return keyboard focus to the previous button
    if (previousFocus) {
        previousFocus.focus();
    }
}


// Close when the X button is clicked
closeButton.addEventListener("click", closePopup);


// Close when the dark background is clicked
popup.addEventListener("click", function(event) {

    if (event.target === popup) {
        closePopup();
    }

});


// Close with Escape and return to the top with Home
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && popup.classList.contains("show")) {
        closePopup();
    }

    if (
        event.key === "Home" &&
        !popup.classList.contains("show") &&
        event.target.tagName !== "INPUT" &&
        event.target.tagName !== "TEXTAREA"
    ) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

});


// ================= SCHEME BUTTONS =================

// Every scheme button opens the matching information
const schemeButtons = document.querySelectorAll("[data-scheme]");

schemeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const schemeName = button.dataset.scheme;

        openPopup(schemes[schemeName]);

    });

});


// ================= SERVICE AND MAP BUTTONS =================

// Service cards, directory buttons and map markers use the same data
const infoButtons = document.querySelectorAll("[data-info]");

infoButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const serviceName = button.dataset.info;

        openPopup(services[serviceName]);

    });

});


// ================= FEEDBACK FORM =================

const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    const name = document.getElementById("feedbackName").value.trim();

    const feedback = document.getElementById("feedbackText").value.trim();

    const message = document.getElementById("feedbackMessage");


    // Check whether both fields contain text
    if (name === "" || feedback === "") {

        message.innerText =
            "Please fill in both fields. | कृपया दोनों खाने भरें।";

        return;

    }


    // Show a confirmation for this demonstration
    message.innerText =
        "Thank you, " + name + "! Your feedback is shown as submitted in this demo. " +
        "| धन्यवाद, " + name + "! इस डेमो में आपका सुझाव दर्ज दिखाया गया है।";


    // Clear the input fields
    feedbackForm.reset();

});