import cls from "./charts.module.scss";
export function Charts() {
  return (
    <div className={cls.chart}>
      <div className={cls.title}>
        <i style={{ color: "#4380ff" }}>In 28 days </i>your results will
        reach...
      </div>
      <div className={cls.chart_block}>
        <div className={cls.chart_inner}>
          <div className={cls.chart_title}>
            Multi-tasking skill
            <div className={cls.chart_emoji}>
              <img src="/images/landing/chart_emoji_1.png" alt="emoji"></img>
            </div>
          </div>
          <div className={cls.superpuperwrapper}>
            <div className={cls.chartImg_wrapper}>
              <img
                className={cls.chartImg}
                src="/images/landing/chart_1.png"
                alt="chart"
              ></img>
            </div>
            <div className={cls.start1}>34%</div>
            <div className={cls.end1}>98%</div>
          </div>
        </div>
      </div>
      <div className={cls.chart_block}>
        <div className={cls.chart_inner}>
          <div className={cls.chart_title}>
            Procrastination level
            <div className={cls.chart_emoji}>
              <img src="/images/landing/chart_emoji_2.png" alt="emoji"></img>
            </div>
          </div>
          <div className={cls.superpuperwrapper}>
            <div className={cls.chartImg_wrapper}>
              <img
                className={cls.chartImg}
                src="/images/landing/chart_2.png"
                alt="chart"
              ></img>{" "}
            </div>
            <div className={cls.start2}>65%</div>
            <div className={cls.end2}>10%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
