export default function Home() {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<header>
  <nav class="nav">
    <span class="name">DataHelix</span>
    <ul>
      <li><a href="#capabilities">Capabilities</a></li>
      <li><a href="#algorithms">Algorithms</a></li>
      <li><a href="#engagement">Engagement</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<section class="hero">
  <div class="hero-top">
    <div class="margin-note mono">§ 01 / analysis</div>
    <div>
      <h1>Omics data has a shape. <span class="accent">I model it, not just test it.</span></h1>
      <p class="lede">Analysis for research groups working with single-cell, spatial, bulk and multi-omics data. Built on mathematical modelling and network biology, including custom algorithms developed for problems standard pipelines don't cover.</p>
      <div class="cta-row">
        <a class="btn" href="#contact">Request a first consultation</a>
        <a class="btn-ghost" href="#capabilities">What I can extract from your data →</a>
      </div>
    </div>
  </div>

  <svg class="wavefront" viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g fill="none" stroke="#6B8F71" stroke-width="1" opacity="0.5">
      <circle cx="430" cy="110" r="40"/>
      <circle cx="430" cy="110" r="80"/>
      <circle cx="430" cy="110" r="120"/>
    </g>
    <g stroke="#1B2A3A" stroke-width="1" opacity="0.4">
      <path d="M430,110 Q380,60 300,50" fill="none"/>
      <path d="M430,110 Q470,40 560,35" fill="none"/>
      <path d="M430,110 Q510,150 610,150" fill="none"/>
      <path d="M430,110 Q360,170 260,175" fill="none"/>
      <path d="M300,50 Q220,45 160,80" fill="none"/>
      <path d="M560,35 Q650,45 700,90" fill="none"/>
      <path d="M610,150 Q680,160 740,130" fill="none"/>
      <path d="M260,175 Q180,190 120,160" fill="none"/>
    </g>
    <circle cx="430" cy="110" r="9" fill="#C1613C"/>
    <circle cx="300" cy="50" r="5" fill="#1B2A3A"/>
    <circle cx="560" cy="35" r="5" fill="#1B2A3A"/>
    <circle cx="610" cy="150" r="5" fill="#1B2A3A"/>
    <circle cx="260" cy="175" r="5" fill="#1B2A3A"/>
    <circle cx="160" cy="80" r="3.5" fill="#6B8F71"/>
    <circle cx="700" cy="90" r="3.5" fill="#6B8F71"/>
    <circle cx="740" cy="130" r="3.5" fill="#6B8F71"/>
    <circle cx="120" cy="160" r="3.5" fill="#6B8F71"/>
    <text x="450" y="114" font-family="IBM Plex Mono, monospace" font-size="10" fill="#4C5C6B">seed node</text>
  </svg>
</section>

<hr class="rule">

<section id="capabilities" class="wide">
  <div class="eyebrow">§ 02 / what the data can tell you</div>
  <h2 class="section-title">Same platform, different questions</h2>
  <p class="section-sub">What a dataset can answer depends on how it's analysed. A short guide to what each data type actually yields, beyond a standard report.</p>

  <div class="extract-grid">
    <div class="extract-panel">
      <div class="tag">single-cell RNA-seq</div>
      <h3>Cell identity and state</h3>
      <ul>
        <li><strong>Composition shifts</strong>: which cell types expand, deplete or appear between conditions</li>
        <li><strong>Trajectories</strong>: pseudotime and RNA velocity to order cell states along a differentiation or disease axis</li>
        <li><strong>Cell-cell communication</strong>: ligand-receptor signalling inferred between populations</li>
        <li><strong>Rare populations</strong>: subclusters invisible to bulk averaging</li>
        <li><strong>Regulatory inference</strong>: transcription factor activity and gene regulatory network structure at single-cell resolution</li>
      </ul>
    </div>
    <div class="extract-panel">
      <div class="tag">spatial transcriptomics</div>
      <h3>Where, not just what</h3>
      <ul>
        <li><strong>Tissue domains</strong>: spatially coherent niches defined by co-expression, not just histology</li>
        <li><strong>Neighbourhood structure</strong>: which cell types sit next to each other more than chance predicts</li>
        <li><strong>Constrained signalling</strong>: ligand-receptor pairs filtered to physically plausible interactions</li>
        <li><strong>Radial gradients</strong>: expression change with distance from a reference structure (tumour margin, plaque, lesion)</li>
        <li><strong>Reference deconvolution</strong>: mapping single-cell states onto spatial spots or cells</li>
      </ul>
    </div>
    <div class="extract-panel">
      <div class="tag">bulk RNA-seq / proteomics</div>
      <h3>Signal across whole samples</h3>
      <ul>
        <li><strong>Differential expression</strong>: genes or proteins that separate conditions, with proper batch and covariate handling</li>
        <li><strong>Pathway enrichment</strong>: reduced to non-redundant themes rather than hundreds of overlapping terms</li>
        <li><strong>Cell-type deconvolution</strong>: estimating composition from bulk signal using single-cell references</li>
        <li><strong>Co-expression modules</strong>: module-based structure (WGCNA-style) linked to phenotype or outcome</li>
        <li><strong>Outcome association</strong>: expression modules tied to survival or clinical variables</li>
      </ul>
    </div>
    <div class="extract-panel">
      <div class="tag">network-based analysis</div>
      <h3>Structure across the dataset</h3>
      <ul>
        <li><strong>Influential nodes</strong>: genes or proteins positioned to disproportionately affect network behaviour, not just the most differentially expressed</li>
        <li><strong>Controllability</strong>: which nodes, if perturbed, can drive the system toward a different state</li>
        <li><strong>Cross-omics networks</strong>: transcriptomic, proteomic and metabolomic layers integrated as one structure rather than compared side by side</li>
        <li><strong>Redundancy reduction</strong>: semantic clustering of enrichment results down to representative biological themes</li>
      </ul>
    </div>
  </div>
</section>

<div class="repro">
  <div class="wide">
    <div class="eyebrow">§ 03 / reproducibility</div>
    <h2>Delivered as code, not just results</h2>
    <p>Package versions are pinned, environments are documented and random seeds are fixed, so figures can be regenerated by your team, a collaborator, or a reviewer, including any custom algorithm used along the way.</p>
  </div>
</div>

<section id="algorithms" class="wide">
  <div class="eyebrow">§ 04 / tools developed in-house</div>
  <h2 class="section-title">Network algorithms, built for problems standard pipelines skip</h2>
  <p class="section-sub">Some questions don't have an off-the-shelf tool. These were built to answer them, and are available as part of an engagement where they apply.</p>

  <div class="algo">
    <div class="algo-item">
      <div class="algo-name mono">MEWS
        <span class="full">Multi-scale Epidemic Wavefront Score</span>
      </div>
      <div class="algo-desc">
        <p>A network science algorithm for identifying influential spreaders and bridge nodes in a network, built for cases where degree or centrality alone gives poor ranking resolution. Validated empirically on real-world networks, with the contribution centred on ranking resolution and bridge-node detection rather than raw predictive accuracy.</p>
        <p>Applicable to protein–protein interaction networks, gene regulatory networks, or any biological system where identifying disproportionately influential nodes matters more than ranking everything by degree.</p>
        <span class="status">published in mSystems, 2025</span>
      </div>
    </div>
    <div class="algo-item">
      <div class="algo-name mono">GO Theme Clustering
        <span class="full">Semantic enrichment clustering</span>
      </div>
      <div class="algo-desc">
        <p>A pipeline for collapsing hundreds of redundant GO Biological Process enrichment terms into a small number of representative themes, combining Jaccard, Wang and Lin/Resnik similarity measures with Leiden community detection and REVIGO-style representative selection.</p>
        <p>Built for the common case where a standard enrichment analysis returns a list too long and too redundant to interpret directly, and a manuscript needs a handful of clearly named biological themes instead.</p>
        <span class="status">in-house tool</span>
      </div>
    </div>
  </div>
</section>

<hr class="rule">

<section id="engagement" class="wide">
  <div class="eyebrow">§ 05 / engagement</div>
  <h2 class="section-title">How a project is set up</h2>
  <div class="timeline">
    <div class="tl-item">
      <h3>First consultation</h3>
      <p>A discussion to define the biological question, the data available or planned, and the objective. Free of charge, with the time it takes.</p>
    </div>
    <div class="tl-item">
      <h3>Written proposal</h3>
      <p>Scope, deliverables, timeline and price, agreed in writing before work begins. Fixed price for defined projects, hourly rate for advisory work.</p>
    </div>
    <div class="tl-item">
      <h3>Delivery</h3>
      <p>Report, figures, methods text and a code repository, followed by a handover session with your team.</p>
    </div>
  </div>

  <hr class="rule" style="margin:36px 0;">

  <div class="services">
    <div class="svc-label">design</div>
    <div class="svc-body"><ul><li>Experimental and study design</li><li>Feasibility and sample size assessment</li><li>Platform and technology selection</li><li>Analysis plans for grant applications</li></ul></div>
    <div class="svc-label">deliverables</div>
    <div class="svc-body"><table class="plain">
      <tr><td>report</td><td>Written analysis report covering methods, results and analytical decisions</td></tr>
      <tr><td>figures</td><td>Vector files at journal resolution, with underlying source data</td></tr>
      <tr><td>methods</td><td>Methods and statistics sections for direct inclusion in a manuscript</td></tr>
      <tr><td>code</td><td>Version-controlled, documented, pinned versions and fixed seeds</td></tr>
    </table></div>
    <div class="svc-label">scope</div>
    <div class="svc-body"><table class="plain">
      <tr><td>data types</td><td>Single-cell, spatial, bulk RNA-seq, proteomics, lipidomics, metabolomics, and integration across these</td></tr>
      <tr><td>languages</td><td>R and Python</td></tr>
      <tr><td>infra</td><td>Institutional clusters or your own infrastructure</td></tr>
    </table></div>
    <div class="svc-label">software</div>
    <div class="svc-body"><ul>
      <li>Packaging an analysis method or pipeline as a reusable R package</li>
      <li>Documentation, unit tests and vignettes to the standard package repositories expect</li>
      <li>Support toward Bioconductor or CRAN submission, where the package and data meet their review criteria</li>
    </ul></div>
  </div>
</section>

<hr class="rule">

<section id="expertise" class="wide">
  <div class="eyebrow">§ 06 / background</div>
  <h2 class="section-title">Mathematical, computational and applied</h2>
  <div class="expertise">
    <div>
      <div class="fact"><div class="k">education</div><div class="v">PhD, Mathematical Biology, Jadavpur University</div></div>
      <div class="fact"><div class="k">postdoctoral work</div><div class="v">University College Dublin, KRAS signalling in oncology; RCSI Ireland, Parkinson's disease spatial multi-omics</div></div>
      <div class="fact"><div class="k">experience</div><div class="v">10+ years across multi-omics, single-cell, network biology, ML and spatial transcriptomics</div></div>
      <div class="fact"><div class="k">location</div><div class="v">India</div></div>
    </div>
    <div class="expertise-body">
      <p>My research centres on protein perturbations in disease, with a particular focus on autophagy, approached through mathematical modelling and a network biology lens. That's the lens I bring to client work: treating a dataset as a structure of interacting parts worth modelling, not just a table of features to test one at a time.</p>
      <p class="muted">Projects have spanned KRAS signalling in oncology, spatial and lipidomic profiling in Parkinson's disease, proteomics pipelines including AP-MS and phosphoproteomics, and the two tools above: one for identifying influential nodes in biological networks, one for cutting redundant enrichment results down to something readable.</p>
      <ul class="pub-list">
        <li><span class="venue mono">Physica A · 2023</span>: network modelling in NASH</li>
        <li><span class="venue mono">mSystems · 2025</span>: network controllability analysis</li>
        <li><span class="venue mono">R package</span>: TCGAimmunosurv</li>
        <li><span class="venue mono">book chapter</span>: integrative multi-omics approaches in cancer research</li>
      </ul>
    </div>
  </div>
</section>

<hr class="rule">

<section id="contact" class="wide">
  <div class="contact-box">
    <div>
      <div class="eyebrow">§ 07 / contact</div>
      <h2 class="section-title" style="margin-bottom:8px;">Request a first consultation</h2>
      <p>Include the biological question, the data available or planned, and your deadline.</p>
      <a class="contact-email" href="mailto:compsysbiosol@gmail.com">compsysbiosol@gmail.com</a>
    </div>
    <div class="contact-meta">
      <div class="fact"><div class="k">response time</div><div class="v">Within 2 business days</div></div>
      <div class="fact"><div class="k">first consultation</div><div class="v">Free of charge</div></div>
      <div class="fact"><div class="k">engagement</div><div class="v">Fixed price for defined projects, hourly for advisory work</div></div>
    </div>
  </div>
</section>

<footer>
  <span>© 2026 DataHelix &nbsp;·&nbsp; Dipanka Tanu Sarmah, PhD</span>
  <span>datahelix.vercel.app</span>
</footer>`,
      }}
    />
  );
}
