const CutShapeSvg = () => {
  return (
    <div className="w-[1080px] h-auto max-w-full sm:max-w-[650px] md:max-w-[1000px] lg:max-w-[1130px] z-0">
      <svg
        className="w-full h-auto"
        viewBox="0 0 934 868"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        {/* Define Image Pattern */}
        <defs>
          <pattern id="bgPattern" patternUnits="userSpaceOnUse" width="934" height="868">
            <image href="/images/footerS.jpg" className="brightness-20" width="934" height="868" preserveAspectRatio="xMidYMid slice" />
          </pattern>
        </defs>

        {/* Apply Pattern to Shape */}
        <path
          d="M158 354.5C16.812 191.209 -49.1679 61.7535 42.685 0H934V812.206C752.94 1033.05 314.5 535.5 158 354.5Z"
          fill="url(#bgPattern)"
        />
      </svg>
    </div>
  );
};

export default CutShapeSvg;
