import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from './assets/login2.jpg';

const UNI_GREEN = '#1E5A34';
const PRIMARY = '#000000';
const SURFACE = '#f8f9fa';
const SURFACE_CONTAINER_LOW = '#f3f4f5';
const ON_SURFACE = '#191c1d';
const ON_SURFACE_VARIANT = '#4c4546';
const OUTLINE = '#7e7576';
const OUTLINE_VARIANT = '#cfc4c5';

const FONTS = {
  hanken: "'Hanken Grotesk', sans-serif",
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: SURFACE,
    color: ON_SURFACE,
    WebkitFontSmoothing: 'antialiased',
    fontFamily: FONTS.inter,
  },
  // --- Header ---
  header: {
    width: '100%',
    backgroundColor: SURFACE,
    borderBottom: `1px solid ${OUTLINE_VARIANT}`,
    zIndex: 50,
  },
  headerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 48px',
    maxWidth: '1280px',
    margin: '0 auto',
    height: '80px',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
  },
  logoText: {
    fontFamily: FONTS.hanken,
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: PRIMARY,
  },
  logoBadge: {
    fontFamily: FONTS.mono,
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    padding: '2px 8px',
    border: `1px solid ${OUTLINE}`,
    textTransform: 'uppercase',
    color: ON_SURFACE,
  },
  headerNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  headerLink: {
    fontFamily: FONTS.mono,
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    color: ON_SURFACE_VARIANT,
    textDecoration: 'none',
  },
  // --- Main ---
  main: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 48px',
  },
  card: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '100%',
    maxWidth: '900px',
    backgroundColor: SURFACE,
    border: `1px solid ${OUTLINE_VARIANT}`,
    overflow: 'hidden',
  },
  // --- Left / Branding Side ---
  brandSide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '48px',
    backgroundColor: SURFACE_CONTAINER_LOW,
    borderRight: `1px solid ${OUTLINE_VARIANT}`,
  },
  brandHeadline: {
    fontFamily: FONTS.hanken,
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    color: PRIMARY,
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  brandBody: {
    fontFamily: FONTS.inter,
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: ON_SURFACE_VARIANT,
    maxWidth: '360px',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '256px',
    marginTop: '32px',
    borderTop: `1px solid ${OUTLINE_VARIANT}`,
    borderBottom: `1px solid ${OUTLINE_VARIANT}`,
    padding: '16px 0',
    filter: 'grayscale(100%)',
    opacity: 0.8,
    transition: 'filter 0.7s ease, opacity 0.7s ease',
  },
  imageBg: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${loginImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  trustRow: {
    display: 'flex',
    gap: '16px',
    marginTop: '32px',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  trustLabel: {
    fontFamily: FONTS.mono,
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    color: ON_SURFACE_VARIANT,
    textTransform: 'uppercase',
  },
  icon: {
    fontFamily: "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20",
    fontSize: '20px',
    color: UNI_GREEN,
  },
  // --- Right / Form Side ---
  formSide: {
    padding: '48px',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  formInner: {
    maxWidth: '340px',
    width: '100%',
  },
  formHeadline: {
    fontFamily: FONTS.hanken,
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    color: PRIMARY,
    textTransform: 'uppercase',
    marginBottom: '8px',
  },
  formSubtext: {
    fontFamily: FONTS.inter,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: ON_SURFACE_VARIANT,
    marginBottom: '32px',
  },
  fieldGroup: {
    marginBottom: '24px',
  },
  labelRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4px',
  },
  label: {
    fontFamily: FONTS.mono,
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: ON_SURFACE_VARIANT,
  },
  forgotLink: {
    fontFamily: FONTS.mono,
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    color: UNI_GREEN,
    textDecoration: 'none',
  },
  input: {
    width: '100%',
    padding: '12px 0',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: `1px solid ${OUTLINE_VARIANT}`,
    backgroundColor: 'transparent',
    fontFamily: FONTS.inter,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: ON_SURFACE,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  },
  submitBtn: {
    width: '100%',
    padding: '16px',
    backgroundColor: UNI_GREEN,
    color: '#ffffff',
    border: 'none',
    fontFamily: FONTS.mono,
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '16px',
    transition: 'background-color 0.3s ease',
  },
  infoBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginTop: '32px',
    paddingTop: '32px',
    borderTop: `1px solid ${OUTLINE_VARIANT}`,
  },
  infoIcon: {
    fontFamily: "'Material Symbols Outlined'",
    fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20",
    fontSize: '20px',
    color: OUTLINE,
    flexShrink: 0,
  },
  infoText: {
    fontFamily: FONTS.mono,
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    lineHeight: 1.6,
    color: ON_SURFACE_VARIANT,
  },
  // --- Footer ---
  footer: {
    width: '100%',
    backgroundColor: SURFACE,
    borderTop: `1px solid ${OUTLINE_VARIANT}`,
  },
  footerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '32px 48px',
    maxWidth: '1280px',
    margin: '0 auto',
    flexWrap: 'wrap',
    gap: '16px',
  },
  footerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  footerBrand: {
    fontFamily: FONTS.mono,
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: PRIMARY,
  },
  footerDivider: {
    color: OUTLINE_VARIANT,
  },
  footerCopy: {
    fontFamily: FONTS.mono,
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    color: ON_SURFACE_VARIANT,
    opacity: 0.6,
  },
  footerNav: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
  },
  footerLink: {
    fontFamily: FONTS.mono,
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    color: ON_SURFACE_VARIANT,
    textDecoration: 'none',
  },
};

export default function LoginPage() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&family=Inter:wght@400;500&family=JetBrains+Mono:wght@500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <div style={styles.page}>
        {/* ── Header ── */}
        <header style={styles.header}>
          <div style={styles.headerInner}>
            <Link to="/" style={styles.logoGroup}>
              <span style={styles.logoText}>CLUBSTOCK</span>
              <span style={styles.logoBadge}>University</span>
            </Link>
            <nav style={styles.headerNav}>
              <a href="#" style={styles.headerLink}>Support</a>
            </nav>
          </div>
        </header>

        {/* ── Main ── */}
        <main style={styles.main}>
          <div style={styles.card}>
            {/* Left: Branding */}
            <div style={styles.brandSide}>
              <div>
                <h1 style={styles.brandHeadline}>ClubStock University</h1>
                <p style={styles.brandBody}>
                  The central gateway for academic materials, specialized laboratory equipment, and sustainable resource sharing.
                </p>
              </div>

              <div
                style={{
                  ...styles.imageWrapper,
                  filter: imageHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                  opacity: imageHovered ? 1 : 0.8,
                }}
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => setImageHovered(false)}
              >
                <div style={{ position: 'absolute', inset: 0, border: `1px solid ${OUTLINE_VARIANT}` }} />
                <div style={styles.imageBg} />
              </div>

              <div style={styles.trustRow}>
                <div style={styles.trustItem}>
                  <span style={styles.icon}>verified_user</span>
                  <span style={styles.trustLabel}>Encrypted</span>
                </div>
                <div style={styles.trustItem}>
                  <span style={styles.icon}>account_balance</span>
                  <span style={styles.trustLabel}>Institutional</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div style={styles.formSide}>
              <div style={styles.formInner}>
                <h2 style={styles.formHeadline}>Secure Access</h2>
                <p style={styles.formSubtext}>
                  Log in with your university credentials to manage equipment and materials.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div style={styles.fieldGroup}>
                    <label
                      htmlFor="email"
                      style={{ ...styles.label, color: emailFocused ? UNI_GREEN : ON_SURFACE_VARIANT }}
                    >
                      University Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@university.edu"
                      required
                      style={{
                        ...styles.input,
                        borderBottomColor: emailFocused ? UNI_GREEN : OUTLINE_VARIANT,
                      }}
                      onFocus={() => setEmailFocused(true)}
                      onBlur={() => setEmailFocused(false)}
                    />
                  </div>

                  {/* Password */}
                  <div style={styles.fieldGroup}>
                    <div style={styles.labelRow}>
                      <label
                        htmlFor="password"
                        style={{ ...styles.label, color: passwordFocused ? UNI_GREEN : ON_SURFACE_VARIANT }}
                      >
                        Password
                      </label>
                      <a href="#" style={styles.forgotLink}>Forgot Password?</a>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      style={{
                        ...styles.input,
                        borderBottomColor: passwordFocused ? UNI_GREEN : OUTLINE_VARIANT,
                      }}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isAuthenticating}
                    style={{
                      ...styles.submitBtn,
                      backgroundColor: btnHovered && !isAuthenticating ? PRIMARY : UNI_GREEN,
                      opacity: isAuthenticating ? 0.8 : 1,
                    }}
                    onMouseEnter={() => setBtnHovered(true)}
                    onMouseLeave={() => setBtnHovered(false)}
                  >
                    {isAuthenticating ? (
                      <>
                        <span style={{ ...styles.icon, animation: 'spin 1s linear infinite', color: '#fff' }}>
                          progress_activity
                        </span>
                        Authenticating...
                      </>
                    ) : (
                      <>
                        Log In
                        <span style={{ ...styles.icon, color: '#fff' }}>arrow_forward</span>
                      </>
                    )}
                  </button>

                  {/* MFA notice */}
                  <div style={styles.infoBox}>
                    <span style={styles.infoIcon}>info</span>
                    <p style={styles.infoText}>
                      Use your Multi-Factor Authentication (MFA) device if prompted on the next screen. For security assistance, contact IT Support.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        {/* ── Footer ── */}
        <footer style={styles.footer}>
          <div style={styles.footerInner}>
            <div style={styles.footerLeft}>
              <span style={styles.footerBrand}>LUMEN ARCHIVE</span>
              <span style={styles.footerDivider}>|</span>
              <p style={styles.footerCopy}>© 2024 University Materials Lab. All rights reserved.</p>
            </div>
            <nav style={styles.footerNav}>
              {['Privacy Policy', 'Terms of Service', 'Accessibility', 'Contact'].map((item) => (
                <a key={item} href="#" style={styles.footerLink}>{item}</a>
              ))}
            </nav>
          </div>
        </footer>

        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          input::placeholder { color: ${OUTLINE_VARIANT}; }
          a:hover { opacity: 0.75; }
        `}</style>
      </div>
    </>
  );
}
