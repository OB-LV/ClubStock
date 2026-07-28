import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ── Design tokens ────────────────────────────────────────────────
const C = {
  primary: '#000000',
  onPrimary: '#ffffff',
  surface: '#f8f9fa',
  surfaceContainerLow: '#f3f4f5',
  surfaceContainerHigh: '#e7e8e9',
  surfaceContainerHighest: '#e1e3e4',
  surfaceContainer: '#edeeef',
  onSurface: '#191c1d',
  onSurfaceVariant: '#4c4546',
  outlineVariant: '#cfc4c5',
  outline: '#7e7576',
  primaryContainer: '#1b1b1b',
  secondaryFixed: '#d5e3ff',
  onSecondaryFixed: '#001c3b',
  secondaryContainer: '#8ebbfe',
  onSecondaryContainer: '#114a85',
  tertiaryFixed: '#b2f1bf',
  onTertiaryFixed: '#00210d',
  errorContainer: '#ffdad6',
  onErrorContainer: '#93000a',
  error: '#ba1a1a',
  univGreen: '#1E5A34',
  academicBlue: '#1A4F8B',
};

const F = {
  hanken: "'Hanken Grotesk', sans-serif",
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const icon = (name, extra = {}) => (
  <span style={{ fontFamily: "'Material Symbols Outlined'", fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", fontSize: '20px', ...extra }}>{name}</span>
);

// ── Data ────────────────────────────────────────────────────────
const kpis = [
  { label: 'Active Borrows', value: 142, chip: 'STABLE', chipBg: C.secondaryFixed, chipColor: C.onSecondaryFixed, valueColor: C.primary },
  { label: 'Items Available', value: 2840, chip: '94%', chipBg: C.tertiaryFixed, chipColor: C.onTertiaryFixed, valueColor: C.primary },
  { label: 'Pending Requests', value: 28, chip: '+12', chipBg: C.secondaryContainer, chipColor: C.onSecondaryContainer, valueColor: C.primary },
  { label: 'Overdue Items', value: 7, chip: 'CRITICAL', chipBg: C.errorContainer, chipColor: C.onErrorContainer, valueColor: C.error },
];

const activity = [
  { icon: 'camera_alt', name: 'Sony Alpha A7 IV – Body Only', by: 'Borrowed by Julian Vane (Student ID: 4492)', time: '14:22 PM', status: 'COMPLETED', statusColor: C.univGreen, iconBg: C.primaryContainer, iconColor: C.onPrimary },
  { icon: 'mic', name: 'Rode NT1-A Microphone Kit', by: 'Returned by Elena Moss (Faculty)', time: '12:05 PM', status: 'PROCESSING', statusColor: C.academicBlue, iconBg: C.surfaceContainerHighest, iconColor: C.primary },
  { icon: 'laptop_mac', name: 'MacBook Pro 16" M2 Max', by: 'Request by Marcus Chen (Research)', time: '11:15 AM', status: 'PENDING', statusColor: C.onSurfaceVariant, iconBg: C.surfaceContainerHighest, iconColor: C.primary },
  { icon: 'theater_comedy', name: 'Stage Lighting Rig – LED Par', by: 'Borrowed by Drama Society', time: '09:40 AM', status: 'COMPLETED', statusColor: C.univGreen, iconBg: C.primaryContainer, iconColor: C.onPrimary },
];

const categories = [
  { name: 'AUDIO/VISUAL', pct: 42 },
  { name: 'LAB EQUIPMENT', pct: 28 },
  { name: 'SPORTS & RECREATION', pct: 15 },
  { name: 'EVENT FURNITURE', pct: 10 },
  { name: 'COMPUTING', pct: 5 },
];

const equipment = [
  { category: 'Cinematography', name: 'Blackmagic Pocket Cinema 6K G2', location: 'Media Hub B-12', badge: 'AVAILABLE', badgeBg: C.univGreen, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB_5Q06uPlHtCa59GDPfMydSFw4PimtC9mBaw21KzLMtbqoBuZzdbvXphDd9GiN_esME4MNxDGFKcl56ul3SFoHWZI7xEoQFa0ACiYAHbdCPsv4xTbY4vyC3dHOqlpqN0t0Q0JPOKNrUYhk3U5wZjAQD3krddSy3VwWjgXRNxExPBQLnsFVEukz_-M9iIlDobsCg7idl-BNDdpr8_PempmS3KRK8Bu7FgaiA1KCIi0Lqr69hvx86Fv2kTYs_17uDd8338Ktn5aqcSJ' },
  { category: 'Audio Production', name: 'Sennheiser HD 600 Open Back', location: 'Sound Lab 04', badge: 'AVAILABLE', badgeBg: C.univGreen, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAMq33Rta0PBRW3KUrBWfEQvJJty2JCfAFgedWml0-A0u3UDQSXaSNfp4rlpoSFKjVO1pegfzW-wQH7CGB6Qzj9DEPmDXbDvoe1dPDuiyZtJz1Qz5jPXiVbAtNUC_IoRButtrOxgZ8XojpzxcjlYNd98GJentvs3-B8rw2KL2jVsWEaEjWTyLfOckr_pS728sANbLGJjMc9JlVQQ5RRUoN4DN74D3_5WvZrQox0ZWL-jd34VvD732ES7MmKx3jyxxNnwcSmaxeQBjp' },
  { category: 'Computing', name: 'Twelve South HiRise Stand', location: 'Central Library', badge: 'LAST ITEM', badgeBg: C.academicBlue, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQIg9vzE27A40LLbQiQqbwQEihS0hjQDkdScjXuXO9k1ojMMf3qEZpD7uA_NgbPZA0KY0fPwuNkgc8DEmiKqxOkrdi-veVBb2O8b-XFCg7jmVAyyZGvhD8W8ipU29p6Ol5EpUypWGjf8UG4RCWK5Df50cjMA4iibH5PIo3uuutgKRXvdS04Ql-0cCzcx_L5L0_o58YQ_Spxlc-Zj6u1oqMx1UeIAhhTyc0bgq2IjWv-SgzVB3-cWxktUdVyumZ8NQ1GMcCwMCJsNoe' },
  { category: 'Presentation', name: 'Epson EF-12 Laser Projector', location: 'Lecture Hall 302', badge: 'AVAILABLE', badgeBg: C.univGreen, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdTlPD88n4hRiCa8bGhqT93rGWvSAto_ur9Ez4HEEBT-dt8bloKayFrOODH5_j-zvVukRQglt7tdQ4KIzACle1uTfdlnIPMGF2jFupWGb_HUXP3W8xDxvhKRKTcJrtwVSqxSu9bGOOrYfPa-CICVWNzDCcUvd_UqHZxLoLNJ_SwG4iql0Ob8ujhwkSTpefpb5NFZEl3UEx8-BSy1m6Wmb2pUiah4tWE0L6WSawDwd4Ue0EFMbvWS2XbO_2HQOkegUx981Djv-parf8' },
];

const navItems = [
  { icon: 'dashboard', label: 'Overview', active: true },
  { icon: 'inventory_2', label: 'Inventory' },
  { icon: 'group', label: 'Members' },
  { icon: 'receipt_long', label: 'Transactions' },
  { icon: 'analytics', label: 'Reports' },
  { icon: 'settings', label: 'Settings' },
];

// ── Animated counter hook ────────────────────────────────────────
function useCounter(target, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return val;
}

// ── Sub-components ───────────────────────────────────────────────
function KpiCard({ label, value, chip, chipBg, chipColor, valueColor }) {
  const animated = useCounter(value);
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.outlineVariant}`, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '128px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <p style={{ fontFamily: F.mono, fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em', color: C.onSurfaceVariant, textTransform: 'uppercase' }}>{label}</p>
        <span style={{ background: chipBg, color: chipColor, fontFamily: F.mono, fontSize: '11px', fontWeight: 500, padding: '2px 8px' }}>{chip}</span>
      </div>
      <p style={{ fontFamily: F.hanken, fontSize: '48px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: valueColor }}>{animated.toLocaleString()}</p>
    </div>
  );
}

function ActivityItem({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: hovered ? C.surfaceContainerLow : 'transparent', transition: 'background 0.2s', borderBottom: `1px solid ${C.outlineVariant}` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '40px', height: '40px', background: item.iconBg, color: item.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {icon(item.icon, { color: item.iconColor })}
        </div>
        <div>
          <p style={{ fontFamily: F.inter, fontSize: '16px', fontWeight: 700, color: C.onSurface }}>{item.name}</p>
          <p style={{ fontFamily: F.mono, fontSize: '12px', color: C.onSurfaceVariant, marginTop: '2px' }}>{item.by}</p>
        </div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '16px' }}>
        <p style={{ fontFamily: F.mono, fontSize: '12px', fontWeight: 700, color: C.onSurface }}>{item.time}</p>
        <p style={{ fontFamily: F.mono, fontSize: '12px', color: item.statusColor, marginTop: '2px' }}>{item.status}</p>
      </div>
    </div>
  );
}

function EquipmentCard({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ background: C.surface, border: `1px solid ${hovered ? C.primary : C.outlineVariant}`, display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: 'relative', aspectRatio: '1/1', background: C.surfaceContainerLow, overflow: 'hidden' }}>
        <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)', transition: 'filter 0.5s' }} />
        <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
          <span style={{ background: item.badgeBg, color: '#fff', fontFamily: F.mono, fontSize: '11px', fontWeight: 500, padding: '3px 10px', letterSpacing: '0.05em' }}>{item.badge}</span>
        </div>
      </div>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '8px' }}>
        <div>
          <p style={{ fontFamily: F.mono, fontSize: '11px', color: C.academicBlue, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.category}</p>
          <h4 style={{ fontFamily: F.inter, fontSize: '15px', fontWeight: 700, color: C.onSurface, marginTop: '4px' }}>{item.name}</h4>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: C.onSurfaceVariant }}>
          {icon('location_on', { fontSize: '16px', color: C.onSurfaceVariant })}
          <span style={{ fontFamily: F.mono, fontSize: '11px' }}>{item.location}</span>
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '12px', display: 'flex', gap: '8px' }}>
          <button style={{ flexGrow: 1, background: C.primary, color: C.onPrimary, border: 'none', padding: '8px', fontFamily: F.mono, fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', cursor: 'pointer' }}>BORROW</button>
          <button style={{ width: '40px', background: 'transparent', border: `1px solid ${C.outlineVariant}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>{icon('info')}</button>
        </div>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────
export default function DashboardPage() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <div style={{ display: 'flex', minHeight: '100vh', background: C.surface, fontFamily: F.inter, color: C.onSurface }}>

        {/* ── Sidebar ── */}
        <aside style={{ width: '256px', flexShrink: 0, display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, left: 0, height: '100vh', background: C.surface, borderRight: `1px solid ${C.outlineVariant}`, padding: '32px 16px', zIndex: 50, boxSizing: 'border-box' }}>
          <div style={{ marginBottom: '48px', padding: '0 8px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h1 style={{ fontFamily: F.hanken, fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', color: C.primary }}>CLUBSTOCK</h1>
            </Link>
            <p style={{ fontFamily: F.mono, fontSize: '12px', color: C.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>University Admin</p>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexGrow: 1 }}>
            {navItems.map((item) => (
              <a key={item.label} href="#" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', textDecoration: 'none', color: item.active ? C.primary : C.onSurfaceVariant, fontWeight: item.active ? 700 : 400, background: item.active ? C.surfaceContainerLow : 'transparent', fontFamily: F.inter, fontSize: '16px', transition: 'background 0.2s' }}>
                {icon(item.icon, { color: item.active ? C.primary : C.onSurfaceVariant })}
                {item.label}
                {item.active && <div style={{ position: 'absolute', right: '-1px', top: 0, bottom: 0, width: '2px', background: C.primary }} />}
              </a>
            ))}
          </nav>
          <div style={{ marginTop: 'auto', paddingTop: '32px', borderTop: `1px solid ${C.outlineVariant}` }}>
            <button style={{ width: '100%', background: C.primary, color: C.onPrimary, border: 'none', padding: '12px', fontFamily: F.mono, fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', cursor: 'pointer', marginBottom: '24px' }}>NEW ENTRY</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5dG8k3RnN2QO7XGDV0eMxWkYH1MR45SayXxYefoIhsIsm4eKsGWosZfxQkcxwh1WtxPyqAWVdrEX9BolJ6Ajk9V19Y9FP_FzIF-L1M8OQNqyQUts4YGdeRAnDfHjzDNuk6tX8JCND85J6n53GRDLvkuAkhKllz_BqviVH2tH0BIOrfejVX6ziR7b-BEqXtDTVg6wG3oFwy_tiuatSZdeARIBCgyyr6Dd5bEGv5LQ_-qDtP_f_lUNAsLMO3FX3irFaqjjnSyloBP8W" alt="Admin" style={{ width: '40px', height: '40px', border: `1px solid ${C.outlineVariant}`, objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ overflow: 'hidden' }}>
                <p style={{ fontFamily: F.inter, fontSize: '15px', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Dr. Aris Thorne</p>
                <p style={{ fontFamily: F.mono, fontSize: '11px', color: C.onSurfaceVariant, marginTop: '2px' }}>Inventory Head</p>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main ── */}
        <main style={{ marginLeft: '256px', flexGrow: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Top bar */}
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 48px', height: '64px', background: C.surface, borderBottom: `1px solid ${C.outlineVariant}`, position: 'sticky', top: 0, zIndex: 40, boxSizing: 'border-box' }}>
            <h2 style={{ fontFamily: F.hanken, fontSize: '24px', fontWeight: 900, letterSpacing: '-0.02em', color: C.primary }}>Dashboard</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <div style={{ position: 'relative' }}>
                <span style={{ fontFamily: "'Material Symbols Outlined'", fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", fontSize: '20px', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: C.outline }}>search</span>
                <input type="text" placeholder="Search equipment, members..." style={{ background: C.surfaceContainerLow, border: `1px solid ${searchFocused ? C.academicBlue : C.outlineVariant}`, padding: '8px 16px 8px 38px', width: '320px', fontFamily: F.inter, fontSize: '15px', outline: 'none', color: C.onSurface, transition: 'border-color 0.2s', boxSizing: 'border-box' }} onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} />
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px' }}>{icon('notifications', { color: C.onSurfaceVariant })}</button>
                <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px' }}>{icon('help_outline', { color: C.onSurfaceVariant })}</button>
              </div>
            </div>
          </header>

          {/* Content */}
          <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', gap: '32px', flexGrow: 1 }}>
            {/* KPI Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {kpis.map((k) => <KpiCard key={k.label} {...k} />)}
            </div>

            {/* Two-column */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
              {/* Recent Activity */}
              <div style={{ background: C.surface, border: `1px solid ${C.outlineVariant}` }}>
                <div style={{ padding: '24px', borderBottom: `1px solid ${C.outlineVariant}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontFamily: F.hanken, fontSize: '24px', fontWeight: 600, color: C.primary }}>Recent Activity</h3>
                  <button style={{ background: 'none', border: 'none', fontFamily: F.mono, fontSize: '12px', color: C.academicBlue, cursor: 'pointer', letterSpacing: '0.05em' }}>VIEW ALL</button>
                </div>
                <div>{activity.map((a, i) => <ActivityItem key={i} item={a} />)}</div>
              </div>

              {/* Top Categories */}
              <div style={{ background: C.surface, border: `1px solid ${C.outlineVariant}`, padding: '24px' }}>
                <h3 style={{ fontFamily: F.hanken, fontSize: '24px', fontWeight: 600, color: C.primary, marginBottom: '24px' }}>Top Categories</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {categories.map((cat) => (
                    <div key={cat.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: F.mono, fontSize: '12px', letterSpacing: '0.05em', marginBottom: '6px' }}>
                        <span>{cat.name}</span>
                        <span style={{ fontWeight: 700 }}>{cat.pct}%</span>
                      </div>
                      <div style={{ width: '100%', height: '3px', background: C.surfaceContainerHigh }}>
                        <div style={{ width: `${cat.pct}%`, height: '100%', background: C.primary }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: `1px solid ${C.outlineVariant}` }}>
                  <p style={{ fontFamily: F.inter, fontSize: '15px', color: C.onSurfaceVariant, fontStyle: 'italic' }}>"A-V equipment shows 12% higher utilization than previous academic term."</p>
                </div>
              </div>
            </div>

            {/* Equipment Grid */}
            <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h3 style={{ fontFamily: F.hanken, fontSize: '24px', fontWeight: 600, color: C.primary }}>Available Equipment</h3>
                  <p style={{ fontFamily: F.inter, fontSize: '15px', color: C.onSurfaceVariant, marginTop: '4px' }}>Ready for immediate dispatch.</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['filter_list FILTER', 'sort SORT'].map((btn) => {
                    const [ico, lbl] = btn.split(' ');
                    return (
                      <button key={lbl} style={{ background: C.surface, border: `1px solid ${C.outlineVariant}`, padding: '8px 16px', fontFamily: F.mono, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {icon(ico)}{lbl}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                {equipment.map((item) => <EquipmentCard key={item.name} item={item} />)}
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer style={{ padding: '24px 48px', borderTop: `1px solid ${C.outlineVariant}`, background: C.surface, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <p style={{ fontFamily: F.mono, fontSize: '11px', color: C.onSurfaceVariant, letterSpacing: '0.05em' }}>© 2024 CLUBSTOCK UNIVERSITY SYSTEM • V 2.4.0-ACADEMIC</p>
            <nav style={{ display: 'flex', gap: '24px' }}>
              {['INVENTORY POLICY', 'SYSTEM STATUS', 'ADMIN SUPPORT'].map((lnk) => (
                <a key={lnk} href="#" style={{ fontFamily: F.mono, fontSize: '11px', color: C.onSurfaceVariant, textDecoration: 'none', letterSpacing: '0.05em' }}>{lnk}</a>
              ))}
            </nav>
          </footer>
        </main>
      </div>
    </>
  );
}
