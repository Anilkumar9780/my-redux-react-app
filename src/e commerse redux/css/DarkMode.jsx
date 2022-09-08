@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@100;200;300;400;500;600;700&family=Playfair+Display:wght@700&display=swap');

.Container {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify - content: center;
  align - items: center;
}

.Container - dark {
  background - color: #000;
}

.Container - light {
  background - color: rgb(216, 216, 216);
}

.Content {
  display: flex;
  justify - content: center;
  align - items: center;
  height: 200px;
  width: 80 %;
  margin - right: 1em;
  font - family: 'M PLUS 1 Code', sans - serif;
  font - weight: 500;
  font - size: 2em;
}

/* Neon styles by Majid Ahmadi, from Codepen: https://codepen.io/majahd/pen/MWybWdY */

.Content - dark {
  color: #fee;
  text - shadow: 0 - 40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
}

.Content - dark span {
  animation: blink linear infinite 2s;
}

.Content - dark span: nth - of - type(2) {
  animation: blink linear infinite 3s;
}

@keyframes blink {
  78 % {
    color: inherit,
    text- shadow: inherit;
}

79 % {
  color: #333,
}

80 % {

  text- shadow: none;
  }

81 % {
  color: inherit,
  text- shadow: inherit;
  }

82 % {
  color: #333,
  text- shadow: none;
  }

83 % {
  color: inherit,
  text- shadow: inherit;
  }

92 % {
  color: #333,
  text- shadow: none;
  }



