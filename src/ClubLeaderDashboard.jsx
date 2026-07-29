import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── Stitch Design Tokens: Mapped precisely from the provided HTML ─── */
const T = {
  bg: '#f8f9fa',
  surfaceLowest: '#ffffff',
  surfaceLow: '#f3f4f5',
  surfaceHigh: '#e7e8e9',
  surfaceHighest: '#e1e3e4',
  primary: '#000000',
  onPrimary: '#ffffff',
  onSurface: '#191c1d',
  onSurfaceVar: '#4c4546',
  outline: '#7e7576',
  outlineVar: '#cfc4c5',
  borderThin: '#E5E7EB',
  green: '#1E5A34',
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onErrorContainer: '#93000a',
  secondary: '#2f5f9c',
  onSecondaryContainer: '#114a85',
};

/* ─── Typography mapping ─── */
const F = {
  display: "'Hanken Grotesk', sans-serif",
  headline: "'Hanken Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  label: "'JetBrains Mono', monospace",
};

/* ─── Reusable Icon ─── */
const Ic = ({ name, size = 20, color = 'inherit', style = {}, fill = 0 }) => (
  <span style={{
    fontFamily: "'Material Symbols Outlined'",
    fontVariationSettings: `'FILL' ${fill}, 'wght' 300, 'GRAD' 0, 'opsz' 20`,
    fontSize: size, color, lineHeight: 1, userSelect: 'none', ...style,
  }}>{name}</span>
);

/* ─── Main Dashboard ─── */
export default function ClubLeaderDashboard() {
  const [activeNav, setActiveNav] = useState('Overview');

  const NAV = [
    { icon: 'dashboard', label: 'Overview' },
    { icon: 'inventory_2', label: 'Inventory' },
    { icon: 'group', label: 'Members' },
    { icon: 'receipt_long', label: 'Transactions' },
    { icon: 'analytics', label: 'Reports' },
    { icon: 'settings', label: 'Settings' },
  ];

  return (
    <>
      {/* Required fonts for the new design */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Hanken+Grotesk:wght@600;700;800;900&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: T.bg, color: T.onSurface, fontFamily: F.body }}>
        
        {/* ─── SideNavBar Shell ─── */}
        <aside style={{
          position: 'fixed', left: 0, top: 0, height: '100vh', width: 256,
          padding: '32px 16px', backgroundColor: T.surfaceLowest,
          borderRight: `1px solid ${T.outlineVar}`, zIndex: 50,
          display: 'flex', flexDirection: 'column', boxSizing: 'border-box'
        }}>
          <div style={{ marginBottom: 48, padding: '0 8px' }}>
            <h1 style={{ fontFamily: F.headline, fontSize: 24, fontWeight: 700, color: T.primary, margin: 0 }}>ClubStock</h1>
            <p style={{ fontFamily: F.label, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: T.outline, margin: 0, marginTop: 4 }}>Management System</p>
          </div>
          
          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV.map(n => {
              const isActive = activeNav === n.label;
              return (
                <button key={n.label} onClick={() => setActiveNav(n.label)} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                  backgroundColor: isActive ? T.surfaceLow : 'transparent',
                  color: isActive ? T.primary : T.onSurfaceVar,
                  border: 'none', borderRight: isActive ? `2px solid ${T.primary}` : '2px solid transparent',
                  fontFamily: F.body, fontSize: 16, fontWeight: isActive ? 600 : 400,
                  cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                  borderRadius: isActive ? 0 : 4
                }}
                onMouseEnter={e => { if(!isActive) { e.currentTarget.style.backgroundColor = T.surfaceHigh; e.currentTarget.style.color = T.primary; } }}
                onMouseLeave={e => { if(!isActive) { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = T.onSurfaceVar; } }}
                >
                  <Ic name={n.icon} />
                  {n.label}
                </button>
              )
            })}
          </nav>

          <button style={{
            marginTop: 'auto', backgroundColor: T.green, color: T.onPrimary,
            padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontWeight: 700, borderRadius: 8, border: 'none', cursor: 'pointer', transition: 'opacity 0.2s'
          }} onMouseEnter={e => e.currentTarget.style.opacity = 0.9} onMouseLeave={e => e.currentTarget.style.opacity = 1}>
            <Ic name="add" color={T.onPrimary} size={18} />
            <span style={{ fontFamily: F.label, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>New Entry</span>
          </button>
        </aside>

        {/* ─── Main Content Area ─── */}
        <main style={{ marginLeft: 256, flex: 1, height: '100vh', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          
          {/* TopAppBar Shell */}
          <header style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '0 48px', height: 64, backgroundColor: T.surfaceLowest,
            borderBottom: `1px solid ${T.outlineVar}`, position: 'sticky', top: 0, zIndex: 40, flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              <span style={{ fontFamily: F.headline, fontSize: 24, fontWeight: 900, letterSpacing: '-0.02em', color: T.primary }}>ClubStock University</span>
              <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <a href="#" style={{ fontFamily: F.body, fontSize: 16, color: T.primary, textDecoration: 'none', borderBottom: `2px solid ${T.primary}`, paddingBottom: 8 }}>Dashboard</a>
                <a href="#" style={{ fontFamily: F.body, fontSize: 16, color: T.onSurfaceVar, textDecoration: 'none' }}>Inventory</a>
                <a href="#" style={{ fontFamily: F.body, fontSize: 16, color: T.onSurfaceVar, textDecoration: 'none' }}>Archive</a>
              </nav>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Ic name="search" color={T.outline} size={18} style={{ position: 'absolute', left: 12 }} />
                <input type="text" placeholder="Search resources..." style={{
                  padding: '6px 16px 6px 40px', backgroundColor: T.surfaceLow,
                  border: 'none', borderRadius: 9999, fontSize: 14, fontFamily: F.body, width: 256, outline: 'none'
                }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}><Ic name="notifications" color={T.onSurfaceVar} /></button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}><Ic name="help_outline" color={T.onSurfaceVar} /></button>
                <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${T.outlineVar}`, overflow: 'hidden' }}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZB5nUUOkADy3KJGzQODk62HsGPZ6rtJq4OX2rTNEFs_ak-kztkPKXcoxMcLPzLnDGgXPX1JBppF0Blq0qwajNVCAdVYILNOZ6Wx6fuITYqd3Nzj4qEMdAipGRTl3j2h8K8edMgDTfaAx_7vAqpepqhC2-BEuHS87GPLJlRECHWNUIg7_CLNavhvtc3nx455llDNt1kNK1fo0nNELjNuFMkWzl0FyoEmTZmPOktqwhuvQM8pze-U4onQ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Profile" />
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Canvas */}
          <div style={{ padding: 48, display: 'flex', flexDirection: 'column', gap: 48, boxSizing: 'border-box' }}>
            
            {/* Sanctions Alert (High Priority) */}
            <section style={{ backgroundColor: 'rgba(255, 218, 214, 0.2)', border: '1px solid rgba(186, 26, 26, 0.2)', padding: 24, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <Ic name="warning" color={T.error} fill={1} />
              <div>
                <h3 style={{ fontFamily: F.body, fontWeight: 700, color: T.error, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.1em', margin: 0, marginBottom: 4 }}>Active Sanction Alert</h3>
                <p style={{ fontFamily: F.body, fontSize: 16, color: T.onErrorContainer, margin: 0 }}>Borrowing privileges restricted for 48h due to overdue equipment: <span style={{ fontWeight: 700, textDecoration: 'underline' }}>Sony FX3 (ID: 4492)</span>. Please return item to the Hub immediately.</p>
              </div>
            </section>

            {/* Section 1: Metrics Dashboard Overview & Quick Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
              {/* Metric Cards */}
              <div style={{ gridColumn: 'span 8', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                <MetricCard label="Active Loans" value="12" trend="↑ 2" trendColor={T.green} />
                <MetricCard label="Pending Requests" value="04" trend="Action Needed" trendColor={T.onSecondaryContainer} />
                <MetricCard label="Club Standing" value="A+" trend="98% Reliab." trendColor={T.outline} />
              </div>
              
              {/* Quick Actions */}
              <div style={{ gridColumn: 'span 4', backgroundColor: T.primary, color: T.onPrimary, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                <div>
                  <h2 style={{ fontFamily: F.headline, fontSize: 24, fontWeight: 700, margin: 0, marginBottom: 8 }}>Operations</h2>
                  <p style={{ fontFamily: F.body, fontSize: 14, opacity: 0.7, margin: 0 }}>Execute primary club management tasks.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
                  <button style={{ backgroundColor: T.green, color: T.onPrimary, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, border: 'none', borderRadius: 8, cursor: 'pointer', transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = 0.9} onMouseLeave={e => e.currentTarget.style.opacity = 1}>
                    <span style={{ fontFamily: F.body }}>Borrow Equipment</span>
                    <Ic name="arrow_forward" color={T.onPrimary} />
                  </button>
                  <button style={{ backgroundColor: 'transparent', color: T.onPrimary, border: `1px solid ${T.outline}`, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, borderRadius: 8, cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span style={{ fontFamily: F.label, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Add Member</span>
                    <Ic name="person_add" color={T.onPrimary} />
                  </button>
                </div>
              </div>
            </div>

            {/* Section 2: Borrowing Status & Member Roster (Asymmetric Layout) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 48 }}>
              
              {/* Borrowing Status Table */}
              <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: `1px solid ${T.primary}`, paddingBottom: 16 }}>
                  <h2 style={{ fontFamily: F.headline, fontSize: 24, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>Borrowing Status</h2>
                  <button style={{ background: 'none', border: 'none', fontFamily: F.label, fontSize: 12, color: T.outline, textDecoration: 'underline', cursor: 'pointer', padding: 0 }}>Download Log</button>
                </div>
                <div style={{ backgroundColor: T.surfaceLowest, border: `1px solid ${T.borderThin}`, overflow: 'hidden' }}>
                  <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: `1px solid ${T.outlineVar}`, backgroundColor: T.surfaceLow }}>
                        {['Asset Item', 'Due Date', 'Status', 'Assignee'].map(h => (
                          <th key={h} style={{ padding: 16, fontFamily: F.label, fontSize: 12, color: T.outline, textTransform: 'uppercase', fontWeight: 500 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody style={{ fontFamily: F.body, fontSize: 16 }}>
                      <StatusRow name="DJI Mavic Pro 3 Drone" date="Oct 24, 2023" status="Approved" sColor={T.green} assignee="Marcus V." />
                      <StatusRow name="Zoom H6 Audio Recorder" date="Oct 28, 2023" status="Pending" sColor={T.secondary} assignee="Sarah J." />
                      <StatusRow name="Gopro Hero 11 Black" date="Oct 22, 2023" status="Overdue" sColor={T.error} assignee="Elena R." />
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Member Roster */}
              <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: `1px solid ${T.primary}`, paddingBottom: 16 }}>
                  <h2 style={{ fontFamily: F.headline, fontSize: 24, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>Member Roster</h2>
                  <span style={{ fontFamily: F.label, fontSize: 12, color: T.outline }}>8 / 10 SEATS</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <MemberRow initials="MV" name="Marcus Villanueva" role="President" />
                  <MemberRow initials="SJ" name="Sarah Jenkins" role="Equipment Manager" />
                  <MemberRow initials="ER" name="Elena Rossi" role="Logistics" />
                  <button style={{ width: '100%', padding: '8px 0', border: `1px solid ${T.outline}`, backgroundColor: 'transparent', color: T.primary, fontFamily: F.label, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: 8, cursor: 'pointer', marginTop: 12, transition: 'background-color 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = T.surfaceLow} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>+ View Full Directory</button>
                </div>
              </div>
            </div>

            {/* Section 3: Catalog Teaser (Editorial Grid) */}
            <section style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingBottom: 48 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontFamily: F.display, fontSize: 48, fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1, margin: 0 }}>Catalog Teaser</h2>
                <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', fontFamily: F.body, fontWeight: 700, fontSize: 16, cursor: 'pointer', textDecoration: 'none', color: T.primary }}>
                  <span style={{ textDecoration: 'underline' }}>Explore Full Inventory</span> <Ic name="north_east" color={T.primary} />
                </button>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
                <CatalogItem 
                  img="https://lh3.googleusercontent.com/aida-public/AB6AXuC-HNwC2zGsvM_InpC4vk3Y5O8Qjy7df-Ecosg74ulzkRMYTQkVVnbmTiIVYnGHM3IM3ubSAH-d8G2EBhcdfu4z7IIS36Odk12btDm84l36BuZq0qeHMydGnYYiOKYFnt1K8RFTIij21AHJf3oBFnQFxjITyXZtgVARSNO6OUqhCCN_dkQJsb6Wxe0Pu01srGfWPARI-97qlDmejUoSULk7rFi4aLs_x4z_Pukek3Kr8-LpDIu49N-eaA" 
                  status="Available" statusColor={T.green} 
                  name="Sony Venice 6K Body" cat="Premium Digital Cinema" />
                  
                <CatalogItem 
                  img="https://lh3.googleusercontent.com/aida-public/AB6AXuBqBiRXbqJr8xxPOXi9uxjPpmZDbvvxZVU3SuOp_vZxLvk1slLw2RpRe1nfhcI5ZvGZws_h__GFtF4Y9H4a8KxGlk94LfLETQb1NdQSM8763Zwf8RkHrKpQa-tYA65h_BlaUZjybW1tFZTpzY-S1RMi0jvQRWh38WI5y60zfCDU7pSpxMkZRbEfc6cGs5FOyqcDp4QryOiVF_YIyVVEOFrCR_6hxTNfX6kS2ITagYOVSvXwByok9AJPCw" 
                  status="In Use" statusColor={T.error} 
                  name="Manfrotto 504X Tripod" cat="Fluid Head Stability" />
                  
                <CatalogItem 
                  img="https://lh3.googleusercontent.com/aida-public/AB6AXuDNsiU72qxByNr6gzkiQa0rotzomApMvMJzqabed4FE5wsjRFithbrTEo656fm4sRXK6HltAviiE0ZeUlNI5ML4rXZU64_oGyGgOFeWbMZ0ANYGcuv42ZlrghOWp470wJqpP73C6fwmiU5ufbiixVOL8cXOpQB2ZdDR9ASE4Rg3GViNTGB1esTe17-A2KTjW3FezFUqrzrUpMzqK8iD4Kx4vnKsJAjM-s_F8PqseBpCJfkdv-FanWoOrA" 
                  status="Available" statusColor={T.green} 
                  name="Aputure 600d Pro Kit" cat="High Output Daylight" />
                  
                <CatalogItem 
                  img="https://lh3.googleusercontent.com/aida-public/AB6AXuBuQgvzC5Tniqhp2qbpY7ALRDlPUMrfheEWTq8m_jspCKbG-owN8HOdIxlyJXdqYdIqyLy2oBBeUvToUZQw8K8vpinD6AjjOr8ISbBHTh1DcdyEZVyPe50i7ZY_sMRO9Ukd0aobEPhtxHJA7V9lShb6YSoIvXW1dSno7Jr8j-O5Kem4Vz5gtD_GVTFCK17LmuLXYi1z6BmJjMhaxykxSj3_gBz6grfZUHUMvvhVOmUjKPg5aRr-fiaCZA" 
                  status="Available" statusColor={T.green} 
                  name="Sound Devices 833" cat="Portable Production Mixer" />
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

/* ─── Sub-components ─── */

function MetricCard({ label, value, trend, trendColor }) {
  return (
    <div style={{ backgroundColor: T.surfaceLowest, border: `1px solid ${T.borderThin}`, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 176, boxSizing: 'border-box' }}>
      <span style={{ fontFamily: F.label, fontSize: 12, textTransform: 'uppercase', color: T.outline }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontFamily: F.display, fontSize: 48, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{value}</span>
        <span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 700, color: trendColor }}>{trend}</span>
      </div>
    </div>
  );
}

function StatusRow({ name, date, status, sColor, assignee }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <tr 
      style={{ borderBottom: `1px solid ${T.outlineVar}`, backgroundColor: isHovered ? T.surfaceLow : 'transparent', transition: 'background-color 0.2s' }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      <td style={{ padding: 16, fontWeight: 700 }}>{name}</td>
      <td style={{ padding: 16 }}>{date}</td>
      <td style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: sColor, display: 'inline-block' }} />
          <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: sColor }}>{status}</span>
        </div>
      </td>
      <td style={{ padding: 16, color: T.outline, fontSize: 14 }}>{assignee}</td>
    </tr>
  );
}

function MemberRow({ initials, name, role }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 12, border: `1px solid ${isHovered ? T.primary : T.borderThin}`, transition: 'border-color 0.2s' }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, backgroundColor: T.surfaceHighest, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, fontFamily: F.body }}>{initials}</div>
        <div>
          <p style={{ fontFamily: F.body, fontWeight: 700, fontSize: 14, margin: 0 }}>{name}</p>
          <p style={{ fontFamily: F.label, fontSize: 10, textTransform: 'uppercase', color: T.outline, margin: 0, marginTop: 2 }}>{role}</p>
        </div>
      </div>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}><Ic name="more_vert" color={T.outline} /></button>
    </div>
  );
}

function CatalogItem({ img, status, statusColor, name, cat }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ aspectRatio: '1', backgroundColor: T.surfaceHigh, border: `1px solid ${T.borderThin}`, marginBottom: 16, overflow: 'hidden', position: 'relative' }}>
        <img 
          src={img} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s' }} 
          alt={name} 
        />
        <div style={{ position: 'absolute', top: 16, right: 16, backgroundColor: statusColor, color: T.onPrimary, fontSize: 10, fontWeight: 700, padding: '4px 8px', textTransform: 'uppercase' }}>{status}</div>
      </div>
      <h4 style={{ fontFamily: F.body, fontWeight: 700, fontSize: 18, marginBottom: 4, margin: 0 }}>{name}</h4>
      <p style={{ fontFamily: F.body, color: T.outline, fontSize: 12, textTransform: 'uppercase', letterSpacing: '-0.05em', margin: 0 }}>{cat}</p>
    </div>
  );
}
