<template>
    <div class="background-item">
      <svg class="elipse-1">
      </svg>
      <svg class="elipse-2">
      </svg>
      <svg class="elipse-3">
      </svg>
      <svg class="elipse-4">
      </svg>
    </div>
  </template>
    
  <style>

  .background-item {
    background-color: white;
    height: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: 100vh;
    z-index: 0;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  
  .elipse-1 {
    position: absolute;
    left: -5%;
    top: 12%;
    background: rgba(255, 160, 170, 0.25);
    filter: blur(5vw);
    box-sizing: content-box;
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    will-change: transform;
  }
  
  .elipse-2 {
    position: absolute;
    right: 5%;
    top: 32%;
    background: linear-gradient(180deg,
        rgba(136, 136, 249, 0.29) 0%,
        rgba(138, 138, 235, 0.29) 100%);
    filter: blur(5vw);
    width: 29vw;
    height: 29vw;
    border-radius: 50%;
    will-change: transform;
  }
  
  .elipse-3 {
    position: absolute;
    left: 17%;
    top: 45%;
    background: rgba(101, 222, 230, 0.36);
    filter: blur(5vw);
    border-radius: 50%;
    width: 50%;
    width: 25vw;
    height: 24vw;
    border-radius: 50%;
    will-change: transform;
  }
  
  .elipse-4 {
    position: absolute;
    right: 14%;
    top: -17%;
    background: rgba(243, 182, 109, 0.42);
    filter: blur(5vw);
    border-radius: 50%;
    width: 50%;
    width: 45vw;
    height: 44vw;
    border-radius: 50%;
    will-change: transform;
  }
  </style>
    