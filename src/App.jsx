import { useState } from "react";
import "./App.css";

const friendName = "Doctor 🩺"; // Change this name

function App() {
  const [opened, setOpened] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  const hearts = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 37 + 8) % 100}%`,
    delay: `${(i % 7) * 0.8}s`,
    duration: `${7 + (i % 5)}s`,
    size: `${12 + (i % 4) * 5}px`,
  }));

  function restart() {
    setOpened(false);
    setCelebrating(false);
    setShowSecret(false);
  }

  return (
    <main className={`birthday-page ${celebrating ? "celebrating" : ""}`}>
      <div className="ambient-glow" />

      <div className="stars" aria-hidden="true">
        {Array.from({ length: 30 }, (_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${(i * 31 + 7) % 100}%`,
              top: `${(i * 47 + 9) % 100}%`,
              animationDelay: `${(i % 8) * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="floating-hearts" aria-hidden="true">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              fontSize: heart.size,
            }}
          >
            {heart.id % 3 === 0 ? "♡" : "♥"}
          </span>
        ))}
      </div>

      <header className="top-bar">
        <div className="brand">
          <span className="brand-icon">♡</span>a little something for you
        </div>
        <span className="top-date">MADE WITH LOVE ✦</span>
      </header>

      <section className="main-content">
        {!opened ? (
          <div className="intro-screen fade-in">
            <span className="eyebrow">
              ✦ A LITTLE LATE, BUT FROM THE HEART ✦
            </span>

            <h1>
              Some moments
              <br />
              <em>deserve to be felt,</em>
              <br />
              not just wished.
            </h1>

            <p className="intro-description">
              I might have missed the perfect moment,
              <br className="desktop-break" />
              but I haven't forgotten someone special.
            </p>

            <button
              className="envelope-button"
              onClick={() => setOpened(true)}
              aria-label="Open your surprise letter"
            >
              <span className="envelope-glow" />
              <span className="envelope">💌</span>
              <span className="envelope-heart">♥</span>
            </button>

            <p className="tap-hint">
              <span className="pulse-dot" />
              There's a little letter waiting for you
            </p>

            <button className="text-button" onClick={() => setOpened(true)}>
              OPEN YOUR LITTLE SURPRISE <span>↗</span>
            </button>
          </div>
        ) : (
          <div className="letter-screen fade-in">
            <span className="eyebrow">
              ✦ A LETTER THAT WAS WORTH THE WAIT ✦
            </span>

            <div className="letter-card">
              <div className="letter-top">
                <span>JUST FOR YOU</span>
                <span className="letter-flower">✿</span>
              </div>

              <div className="letter-divider">
                <span>♡</span>
              </div>

              <p className="letter-greeting">Dear {friendName},</p>

              <h2>
                Today is all about
                <br />
                <em>your beautiful existence.</em>
              </h2>

              <p className="letter-text">
                Okay, first things first… I'm sorry I'm late. 🥹 Maybe my wish
                didn't arrive on time, but that doesn't mean you deserve any
                less love, happiness, or beautiful moments.
              </p>

              <p className="letter-text">
                Some people make ordinary days feel special just by being
                themselves. And you are one of those people. I hope this new
                chapter of your life brings you countless reasons to smile,
                dreams that come true, and a heart that always feels loved.
              </p>

              <p className="letter-text">
                If I could give you one thing today, it would be the ability to
                see yourself through the eyes of the people who care about you.
                You'd understand just how precious you are. ❤️
              </p>

              <p className="letter-signature">
                With a little extra love,
                <br />
                <span>Have a nice day ♡</span>
              </p>
            </div>

            <button
              className="celebrate-button"
              onClick={() => setCelebrating(true)}
            >
              Make a little birthday magic <span>✦</span>
            </button>

            {celebrating && (
              <div className="celebration-card fade-in">
                <div className="celebration-emoji">🎂 ✨ 🥂</div>
                <p className="celebration-kicker">YOUR DAY. YOUR MAGIC.</p>
                <h2>
                  Happy Birthday,
                  <br />
                  <em>{friendName}</em>
                </h2>
                <p>
                  A little late, a lot of love.
                  <br />
                  May life always be gentle with your heart. ❤️
                </p>

                <button
                  className="secret-button"
                  onClick={() => setShowSecret(!showSecret)}
                >
                  {showSecret
                    ? "Close my little secret ♡"
                    : "One last little secret 💌"}
                </button>

                {showSecret && (
                  <p className="secret-message fade-in">
                    Maybe my wish arrived late, but the warmth behind it was
                    always there. ❤️ You have a special place in my heart that
                    words can never fully explain. I hope life gives you a
                    thousand reasons to smile, endless moments to cherish, and
                    all the love your heart deserves. Keep smiling, keep
                    shining, and always be the beautiful soul you are. Happy
                    Birthday, Doctor 🩺 🥹💖
                  </p>
                )}

                <button className="restart-button" onClick={restart}>
                  ↻ Read it again
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      <footer className="page-footer">
        <span>NOT PERFECTLY TIMED, JUST SINCERELY MEANT</span>
        <span>♡ MADE WITH LOVE ♡</span>
      </footer>
    </main>
  );
}

export default App;
