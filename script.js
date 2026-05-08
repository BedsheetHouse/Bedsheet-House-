// Replace these with your actual YouTube, WhatsApp, and Instagram URLs
const YOUTUBE_URL = "https://www.youtube.com/@bedsheethouse5/featured";
// WhatsApp Channel or Group Link
const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbBZwIGH5JLwu2j7zL0D";
// Instagram Profile Link
const INSTAGRAM_URL = "https://www.instagram.com/bedsheethouse3003?igsh=MWxoeGZrMng1aHh2NA%3D%3D"; // Add your actual Instagram URL here

const PHONE_NUMBER = "tel:+91 9974412844"; // Add your actual phone number
const MAPS_URL = "https://maps.app.goo.gl/UP4tKDjFkmaHYnee6"; // Add your actual Google Maps URL
const REVIEW_URL = "https://g.page/r/CVCvEux91pKFEBM/review"; // Replace with your actual Google Review link

document.addEventListener("DOMContentLoaded", () => {
    const ytLink = document.getElementById("ytLink");
    const waLink = document.getElementById("waLink");
    const igLink = document.getElementById("igLink");
    const callLink = document.getElementById("callLink");
    const mapsLink = document.getElementById("mapsLink");
    const reviewLink = document.getElementById("reviewLink");

    if (ytLink) ytLink.href = YOUTUBE_URL;
    if (waLink) waLink.href = WHATSAPP_URL;
    if (igLink) igLink.href = INSTAGRAM_URL;
    if (callLink) callLink.href = PHONE_NUMBER;
    if (mapsLink) mapsLink.href = MAPS_URL;
    if (reviewLink) reviewLink.href = REVIEW_URL;
});
