import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "styles/global.scss";
import "./layout.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Navigation } from "components";

export const Layout = ({
  className,
  children,
  noPadding,
  centered,
  animation,
  animationStarted,
  noMaxWidth,
  disableNavigation,
}) => {
  const [isMobileNavEnabled, setIsMobileNavEnabled] = useState(false);
  const [isBackgroundOverlayVisible, setIsBackgroundOverlayVisible] = useState(
    animation || false
  );

  const handleMobileToggle = () => {
    setIsMobileNavEnabled(!isMobileNavEnabled);
  };

  useEffect(() => {
    if (animationStarted && isBackgroundOverlayVisible) {
      const timeout = setTimeout(
        () => setIsBackgroundOverlayVisible(false),
        500
      );
      return () => clearTimeout(timeout);
    }
  }, [animationStarted, isBackgroundOverlayVisible]);

  useEffect(() => {
    const images = [
      '/gif/1.gif',
      '/gif/2.gif',
      '/gif/3.gif',
      '/gif/4.gif',
      '/gif/5.gif',
      '/gif/6.gif',
      '/gif/7.gif',
      '/gif/8.gif',
      '/gif/9.gif',
    ];

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randomFilter() {
      const filters = [
        `hue-rotate(${rand(0, 360)}deg)`,
        `blur(${rand(0, 3)}px)`,
        `brightness(${rand(0.5, 1.5)})`,
        `contrast(${rand(0.5, 2)})`,
        `saturate(${rand(0.5, 3)})`,
        `invert(${Math.random() > 0.8 ? 1 : 0})`,
      ];

      return filters
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(rand(1, 4)))
        .join(' ');
    }

    function spawn() {
      const img = document.createElement('img');
      img.src = images[Math.floor(Math.random() * images.length)];

      const size = rand(50, 250);

      img.style.position = 'fixed';

      const half = size / 2;

      const x = rand(half, window.innerWidth - half);
      const y = rand(half, window.innerHeight - half);

      img.style.left = x + 'px';
      img.style.top = y + 'px';

      img.style.transform = 'translate(-50%, -50%)';

      img.style.width = size + 'px';
      img.style.pointerEvents = 'none';
      img.style.zIndex = 9999999;

      img.style.filter = randomFilter();

      img.style.opacity = rand(0.6, 1);

      document.body.appendChild(img);

      animate(img, x, y, size);
    }

    function animate(el, x, y, size) {
      const half = size / 2;
      let vx = rand(-2, 2);
      let vy = rand(-2, 2);

      let angle = rand(0, Math.PI * 2);
      let spin = rand(-3, 3);

      let mode = Math.floor(rand(0, 4)); 

      let t = 0;

      function frame() {
        t += 0.02;

        if (Math.random() < 0.005) {
          mode = Math.floor(rand(0, 4));
          vx = rand(-3, 3);
          vy = rand(-3, 3);
          spin = rand(-10, 10);
        }

        if (mode === 0) {
          vx += rand(-0.05, 0.05);
          vy += rand(-0.05, 0.05);
          x += vx;
          y += vy;

        } else if (mode === 1) {
          angle += 0.05;
          x += Math.cos(angle) * 2;
          y += Math.sin(angle) * 2;

        } else if (mode === 2) {
          x += rand(-5, 5);
          y += rand(-5, 5);

        } else if (mode === 3) {
          x += vx;
          y += Math.sin(t * 5) * 3;
        }

        if (x < half || x > window.innerWidth - half) {
          vx *= -1;
          x = Math.max(half, Math.min(x, window.innerWidth - half));
        }

        if (y < half || y > window.innerHeight - half) {
          vy *= -1;
          y = Math.max(half, Math.min(y, window.innerHeight - half));
        }

        angle += spin * 0.01;

        if (Math.random() < 0.01) {
          x = Math.max(half, Math.min(x + rand(-100, 100), window.innerWidth - half));
          y = Math.max(half, Math.min(y + rand(-100, 100), window.innerHeight - half));
        }

        el.style.transform = `
          translate(-50%, -50%)
          translate(${x}px, ${y}px)
          rotate(${angle}rad)
          scale(${1 + Math.sin(t * 2) * 0.2})
        `;

        requestAnimationFrame(frame);
      }

      frame();
    }

    let cx = 0, cy = 0;

    document.addEventListener('mousemove', (e) => {
      cx += (e.clientX - cx) * 0.1;
      cy += (e.clientY - cy) * 0.1;

      document.body.style.cursor = 'none';

      let fake = document.getElementById('fake-cursor');
      if (!fake) {
        fake = document.createElement('div');
        fake.id = 'fake-cursor';
        fake.style.position = 'fixed';
        fake.style.width = '20px';
        fake.style.height = '20px';
        fake.style.background = 'red';
        fake.style.borderRadius = '50%';
        fake.style.zIndex = 99999999;
        document.body.appendChild(fake);
      }

      fake.style.transform = `translate(${cx}px, ${cy}px)`;
    });

    setInterval(() => {
      document.querySelectorAll('p, span, h1, h2, button, a, label').forEach(el => {
        if (Math.random() < 0.1) {
          el.textContent = el.textContent
            .split('')
            .sort(() => 0.5 - Math.random())
            .join('');
        }
      });
    }, 20);

    setInterval(spawn, 1);
  }, [])

  return (
    <div
      className={`
        layout
        ${animation ? " layout--with-animation" : ""}
      `}
    >
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta name="title" content="Front-end developer Deimantas Butėnas" />
        <meta
          name="description"
          content="Portfolio website of a front-end developer Deimantas Butėnas."
        />
        <meta
          name="keywords"
          content="deimantas butėnas, deimantas butenas, web development, web developer, frontend, front-end, front end, front end development, front end developer, portfolio, design, web design, react, gatsby, next, nextjs, vue, vuejs, typescript, js, ts, javascript, html, css, scss, sass, git, aws, graphql, sql, amazon web services, redux, lithuania, kaunas, vilnius"
        />
        <link rel="canonical" href="https://www.deimantasb.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deimantasb.com/" />
        <meta
          property="og:title"
          content="Front-end developer Deimantas Butėnas"
        />
        <meta
          property="og:description"
          content="Portfolio website of a front-end developer Deimantas Butėnas where you can see his work!"
        />
        <meta
          property="og:image"
          content="https://www.deimantasb.com/meta-image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.deimantasb.com/" />
        <meta
          property="twitter:title"
          content="Frontend developer Deimantas Butėnas"
        />
        <meta
          property="twitter:description"
          content="Portfolio website of a front-end developer Deimantas Butėnas where you can see his work!"
        />
        <meta
          property="twitter:image"
          content="https://www.deimantasb.com/meta-image.png"
        />
      </Helmet>

      <div
        className={isBackgroundOverlayVisible ? "layout__background-color" : ""}
      ></div>
      <header
        className={`header ${isMobileNavEnabled ? " header--nav-active" : ""}`}
      >
        {!disableNavigation && (
          <Navigation
            toggleMobileNav={handleMobileToggle}
            isMobileNavEnabled={isMobileNavEnabled}
          />
        )}
      </header>

      <main
        className={`
          main
          ${noPadding ? " main--no-padding" : ""}
          ${centered ? " main--centered" : ""}
        `}
      >
        <div className="main__background-color"></div>
        <div className="main__background-image-container">
          <StaticImage
            src="../../images/background.jpg"
            alt=""
            className="main__background-image"
            placeholder="dominantColor"
            quality="50"
          />
        </div>
        <div
          className={`
            main__content
            ${noMaxWidth ? "" : " main__content--with-max-width"}
            ${className}
            ${isMobileNavEnabled ? " main__content--hidden" : ""}
          `}
        >
          {children}
        </div>
      </main>

      <footer className="footer"></footer>
    </div>
  );
};
