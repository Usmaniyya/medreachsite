import React from 'react'
import Link from 'next/link';
import { XIcon } from '@heroicons/react/outline'


const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
  
  <div class="container">
    <div class="form sign-in-form">
      <div class="wrapper">
        <form action="#">
          <h1>Sign In</h1>
          <p>use your email and password to sign in</p>
          <input type="email" placeholder="Email">
          <input type="password" placeholder="password">
          <button>Sign In</button>
        </form>
      </div>
    </div>
    <div class="form sign-up-form active">
      <div class="wrapper">
        <form action="#">
          <h1>Sign up</h1>
          <p>Please, provide all the correct info to create an account</p>
          <input type="text" placeholder="Full Name">
          <input type="email" placeholder="Email">
          <input type="password" placeholder="password">
          <button>Sign Up</button>
        </form>
      </div>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-left">
          <h1>Create Account</h1>
          <p>or</p>
          <button id="signInButton">Log In</button>
        </div>
        <div class="overlay-right">
          <h1>Please, Log In</h1>
          <p>or</p>
          <button id="signUpButton">Create Account</button>
        </div>
      </div>
    </div>
  </div>


<!-- *******************   -->
<!--  This Code is for only the floating card in right bottom corner -->
<!-- ********************  -->

<div id="webCifar-sidebox">
  <div id="webCifar">
    <h2 class="logo">Web Cifar</h2>
    <p class="author">Coded By <span>Shaif Arfan</span> </p>
    <div class="items">
      <a href="https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ" target="_blank" class="item youtubeLink">
        <svg title="watch how we made this" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
        </svg>
        <p>Watch how we made this.
        </p>
      </a>
      <a href="https://webcifar.com" target="_blank" class="item">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <p>https://webcifar.com</p>
      </a>

    </div>
    <div class="close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
  <div id="webCifar-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <p>Info About the pen</p>
  </div>
</div>
  )
}


export default Modal
const signIn = document.querySelector("#signInButton");
const signUp = document.querySelector("#signUpButton");
const signInForm = document.querySelector(".container .sign-in-form");
const signUpForm = document.querySelector(".container .sign-up-form");
const overlay_container = document.querySelector(
  ".container .overlay-container"
);
const overlay = document.querySelector(
  ".container .overlay-container .overlay"
);

signIn.addEventListener("click", () => {
  overlay_container.style.transform = "translateX(100%)";
  overlay.style.transform = "translateX(-50%)";
  signInForm.classList.add("active");
  signUpForm.classList.remove("active");
});
signUp.addEventListener("click", () => {
  overlay_container.style.transform = "translateX(0)";
  overlay.style.transform = "translateX(0)";
  signUpForm.classList.add("active");
  signInForm.classList.remove("active");
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const WebCifarIcon = document.querySelector("#webCifar-icon");
const WebCifarEl = document.querySelector("#webCifar");
const close = WebCifarEl.querySelector(".close");
const youtubeLink = document.querySelector(".youtubeLink");

WebCifarIcon.addEventListener("click", () => {
  WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
  WebCifarEl.classList.remove("active");
});

youtubeLink.setAttribute("href", "https://youtu.be/7FbpuWOffc0");
