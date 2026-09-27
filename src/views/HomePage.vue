<script setup>
import Header from "@/components/Header.vue";
import SectionOne from "@/components/Section/SectionOne.vue";
import Skils from "@/components/Section/Skils.vue";
import SectionSix from "@/components/Section/SectionSix.vue";
import Footer from "@/components/Footer.vue";
import StoryHUD from "@/components/StoryHUD.vue";
import StoryTransition from "@/components/StoryTransition.vue";
</script>

<template>
  <div class="bg-[#F7F5F0] text-[#0D0D0D] min-h-screen relative selection:bg-[#556B2F] selection:text-white">
    <!-- Top Reading Progress & Floating Story Waypoint Rail -->
    <StoryHUD />

    <!-- Sticky Editorial Header -->
    <Header />

    <!-- Chapter 01: Profile & Story -->
    <SectionOne />

    <!-- Story Transition 01: Profile -> Toolkit -->
    <StoryTransition
      fromAct="Chapter 01: About"
      toAct="Chapter 02: Toolkit"
      phase="Milestone 01"
      title="Engineering with First Principles & Resilient Architecture"
      targetId="skills"
      actionText="Explore Technical Toolkit"
      accentColor="olive"
      narrative="An engineer's reputation is forged in the resilience of their systems. Explore the modern frontend frameworks, cross-platform mobile architectures, and real-time data protocols engineered across global productions."
      :terminalLogs="[
        'Core Stack: TypeScript, React, Next.js, React Native, Vue 3, Nuxt',
        'Pillars: Monorepos, Design Systems, Real-Time Streams (WebSockets/SSE)',
        'Strict Type Safety & Zero-Assumption Data Boundaries',
      ]"
    />

    <!-- Chapter 02: Capabilities & Technical Toolkit (Skills) -->
    <Skils />

    <!-- Story Transition 02: Toolkit -> Work -->
    <StoryTransition
      fromAct="Chapter 02: Toolkit"
      toAct="Chapter 03: Work"
      phase="Milestone 02"
      title="From Capabilities to Proven Field Deployments"
      targetId="projects"
      actionText="View Selected Products"
      accentColor="emerald"
      narrative="Theoretical depth only matters when proven in the hands of real users. From multi-currency statutory payroll engines in London to mobile fintech in Zambia, explore 16 shipped products delivered across 14+ global partners."
      :terminalLogs="[
        '16 Verified Production Apps across 7 Nations',
        'Partner Network: UK, Canada, US, Zambia, South Africa, Netherlands, Nigeria',
        'High-Throughput Fintech, Global EOR/Payroll & Real-Time Analytics',
      ]"
    />

    <!-- Chapter 03: Selected Work & Partner Network (Projects) -->
    <SectionSix />

    <!-- Story Transition 03: Work -> Contact -->
    <StoryTransition
      fromAct="Chapter 03: Work"
      toAct="Chapter 04: Contact"
      phase="Milestone 03"
      title="Ready to Build High-Impact Digital Products Together?"
      targetId="dispatch"
      actionText="Get in Touch"
      accentColor="olive"
      narrative="You've explored the background, inspected the technical toolkit, and examined battle-tested production systems. Whether you're hiring for a senior engineering role or seeking consulting for your next milestone, let's talk."
      :terminalLogs="[
        'Availability: Open for Full-Time Senior & Lead Roles',
        'Relocation: UK & Germany Relocation Ready',
        'Remote: Global Asynchronous US / EU Engagements',
      ]"
    />

    <!-- Chapter 04: Contact & Editorial Footer -->
    <Footer />
  </div>
</template>

<style scoped>
</style>
