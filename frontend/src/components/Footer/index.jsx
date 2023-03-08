import './Footer.scss'
import {useLocation} from "react-router-dom";
function Footer() {
    const location = useLocation();

    console.log('1', location)

    return (
        <div className={'footer'}>
            {(location.pathname !== "/wine" && location.pathname !== "/wines")&& (
            <div className={"banner-img"}>
                <p>Discover the Right Wine</p>
            </div>
            )}

            <div className={"company-info"}>
                <p>
                    Trusted by millions to discover and buy the right wine every time.
                </p>
                <div className={"textBox"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                             className="vivinoBulletPoints_vivinoQualityIcon__EakgS" aria-hidden="true"
                             data-acsb-hidden="true" data-acsb-force-hidden="true">
                            <g id="e7ff7d8e-a6f6-40e6-8907-62eac873e4c0" data-name="48">
                                <g id="aa08e429-6029-46c6-8027-296324821343" data-name="marketplace">
                                    <g id="fd48e2f7-2efc-4687-8bd1-010905994d34" data-name="bottle">
                                        <path
                                            d="M15.4668,14.2426V4.2193A1.04,1.04,0,0,0,14.4124,3.2H11.7483a1.04,1.04,0,0,0-1.0544,1.0193V14.2426"
                                            fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path
                                            d="M10.6939,14.2426A6.528,6.528,0,0,0,6.579,20.2885V40.1793A2.02,2.02,0,0,0,8.5975,42.2h8.9657a2.02,2.02,0,0,0,2.0185-2.0207V37.4355"
                                            fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M18.2292,16.3308a6.57,6.57,0,0,0-2.7624-2.0882" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <rect x="7.6535" y="20.7829" width="8.093" height="8.093" rx="1.4525"
                                              fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                              stroke-linejoin="round"
                                              transform="translate(20.9838 -1.0008) rotate(45)"></rect>
                                        <line x1="10.6939" y1="6.2694" x2="15.4668" y2="6.2694" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></line>
                                        <line x1="9.5837" y1="36.4723" x2="13.8162" y2="36.4723" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></line>
                                    </g>
                                    <g id="bf439ae5-4780-4c77-bff6-8324c2d027a5" data-name="rosette">
                                        <g id="f59456fc-b15b-4067-bfbf-0b880bbb247e" data-name="rosette">
                                            <path
                                                d="M42.821,19.241c-.2372-1.3016.467-2.9773-.1727-4.1658-.6168-1.1463-2.3825-1.4741-3.3718-2.4208s-1.4032-2.7058-2.5712-3.2689c-1.2105-.5832-2.838.2091-4.14.0362-1.3158-.175-2.6836-1.361-3.9884-1.12-1.2929.2387-2.1518,1.8315-3.3313,2.475-1.1391.6209-2.9378.4616-3.8786,1.4575s-.6921,2.7968-1.2509,3.9728c-.5793,1.2192-2.1158,2.1623-2.2877,3.474-.1737,1.3248,1.0717,2.64,1.3109,3.9547.2372,1.3011-.4669,2.9768.1728,4.1653.6167,1.1462,2.383,1.4741,3.3718,2.4213s1.4032,2.7053,2.5712,3.2688c1.21.5832,2.8379-.2091,4.1407-.0356,1.3159.1749,2.6831,1.36,3.9885,1.12,1.2928-.2393,2.1513-1.8311,3.3313-2.475,1.1391-.62,2.9383-.4616,3.8791-1.4571s.6921-2.7967,1.25-3.9727c.5792-1.2187,2.1163-2.1623,2.2881-3.474C44.3057,21.87,43.06,20.5547,42.821,19.241Z"
                                                fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <circle cx="30.9804" cy="21.4383" r="5.0951" fill="none" stroke="#1e1e1e"
                                                    stroke-linecap="round" stroke-linejoin="round"></circle>
                                            <path
                                                d="M29.5876,36.8909,27.91,40.4032a1.1125,1.1125,0,0,1-1.8658.1648L23.7414,37.59a1.1123,1.1123,0,0,0-.9619-.4289l-3.9135.289a1.1126,1.1126,0,0,1-1.0677-1.6253L21.2456,29.29"
                                                fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path
                                                d="M40.5944,30.6429l3.21,4.1433a1.1125,1.1125,0,0,1-.8094,1.7916l-3.8029.24a1.1128,1.1128,0,0,0-.9067.5776l-1.78,3.2632a1.1126,1.1126,0,0,1-1.8478.1594L30.196,35.1451"
                                                fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        Shop the world’s largest wine marketplace

                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                             className="vivinoBulletPoints_vivinoQualityIcon__EakgS" aria-hidden="true"
                             data-acsb-hidden="true" data-acsb-force-hidden="true">
                            <g id="ea36e455-db1d-4617-b98b-3e7ef92bf30a" data-name="48">
                                <g id="af1fa49f-154e-478f-87ec-cbfd59a88d0c" data-name="support">
                                    <g id="a90c6384-ca6a-4f31-ae72-f258c293a508" data-name="support">
                                        <g id="ae31281e-184b-476d-8f6a-9d4e691024e0" data-name="comment-fill">
                                            <g id="f64057c8-9613-4b62-804c-93d59b010c40" data-name="comment-fill">
                                                <path
                                                    d="M39.3175,16.8835c-3.7183,0-6.7325,2.4383-6.7325,5.4475a5.0629,5.0629,0,0,0,2.2928,4.0879,9.1223,9.1223,0,0,1-1.1209,2.0777c1.1891.5041,2.5352-.21,3.5233-.9734a8.1947,8.1947,0,0,0,2.0373.2553c3.7183,0,6.7325-2.4391,6.7325-5.4475S43.0358,16.8835,39.3175,16.8835Z"
                                                    fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </g>
                                            <g id="babf6d05-10b3-405a-bd48-a926510667f1" data-name="comment-fill">
                                                <path
                                                    d="M39.3175,16.8835c-3.7183,0-6.7325,2.4383-6.7325,5.4475a5.0629,5.0629,0,0,0,2.2928,4.0879,9.1223,9.1223,0,0,1-1.1209,2.0777c1.1891.5041,2.5352-.21,3.5233-.9734a8.1947,8.1947,0,0,0,2.0373.2553c3.7183,0,6.7325-2.4391,6.7325-5.4475S43.0358,16.8835,39.3175,16.8835Z"
                                                    fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </g>
                                        </g>
                                        <path d="M11.9673,14.4624S6.81,23.6832,12.652,25.1706" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"
                                              fill-rule="evenodd"></path>
                                        <path d="M31.5466,10.8513c1.512,2.247,2.1311,5.1116,1.6171,8.9652" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"
                                              fill-rule="evenodd"></path>
                                        <path d="M31.451,25.509a12.7719,12.7719,0,0,1-3.3126,3.2732" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"
                                              fill-rule="evenodd"></path>
                                        <path d="M18.7716,28.92A8.163,8.163,0,0,1,16.03,26.5709" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"
                                              fill-rule="evenodd"></path>
                                        <path d="M13.6635,21.6353a18.73,18.73,0,0,1-.5175-3.4446" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"
                                              fill-rule="evenodd"></path>
                                        <path
                                            d="M32.431,34.3788a16.48,16.48,0,0,1-8.0254,2.2726,22.3042,22.3042,0,0,1-9.8-2.0465"
                                            fill="none" stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"
                                            fill-rule="evenodd"></path>
                                        <path
                                            d="M31.6014,7.3842s.7321-.1859,2.4521-2.6026-6.2457,2.15-11.0755,0C15.9549,1.6558,8.463,7.1209,13.146,18.1907c0,0,2.528-6.4561,9.5882-4.5971s6.54-2.9182,7.744-2.8633C30.4782,10.73,35.9338,10.9162,31.6014,7.3842Z"
                                            fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path id="b641e218-ac0f-4a9b-9846-3bf5104e4ab8" data-name="profile"
                                              d="M28.1548,28.7822c.0555,3.6642,1.31,4.45,6.4745,6.238a30.2419,30.2419,0,0,1,4.1187,1.6351m-29.7256.17c.98-.4864,2.1262-.9837,3.4372-1.4811,5.1081-1.938,6.3675-2.7609,6.312-6.425"
                                              fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                              stroke-linejoin="round" fill-rule="evenodd"></path>
                                        <rect x="12.6105" y="23.2201" width="4.4048" height="3.165" rx="1.4659"
                                              fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                              stroke-linejoin="round"
                                              transform="translate(-1.9207 1.2531) rotate(-4.5496)"></rect>
                                        <path
                                            d="M27.6493,21.912a4.9249,4.9249,0,0,1-4.0624,2.657,4.9238,4.9238,0,0,1-4.06-2.657"
                                            fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                    <path d="M4,24A19.9773,19.9773,0,0,1,12.5662,7.5884" fill="none" stroke="#1e1e1e"
                                          stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"></path>
                                    <path d="M33.1637,6.2182a20.0585,20.0585,0,0,1,9.8755,11.64" fill="none"
                                          stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"
                                          fill-rule="evenodd"></path>
                                    <path d="M43.8521,26.4443A20.0011,20.0011,0,0,1,4,24" fill="none" stroke="#1e1e1e"
                                          stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"></path>
                                </g>
                            </g>
                        </svg>
                        Our support team is always here to help</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                             className="vivinoBulletPoints_vivinoQualityIcon__EakgS" aria-hidden="true"
                             data-acsb-hidden="true" data-acsb-force-hidden="true">
                            <g id="e8b44cb4-07ba-4f28-baaa-692f42e3ad55" data-name="48">
                                <g id="b364ddee-4f3c-4437-b25e-77d7481dd2d4" data-name="delivery">
                                    <g id="b8d1d34c-f43f-4556-8a57-ce34853bc6bf" data-name="delivery">
                                        <line x1="29.589" y1="24.8285" x2="40.9949" y2="24.8285" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></line>
                                        <polyline points="29.589 14.134 29.589 37.44 22.564 37.44" fill="none"
                                                  stroke="#1e1e1e" stroke-linecap="round"
                                                  stroke-linejoin="round"></polyline>
                                        <path
                                            d="M11.1255,37.44H4.6584a2.2626,2.2626,0,0,1-2.2626-2.2625V22.7587a2.2671,2.2671,0,0,1,2.3248-2.2663h0"
                                            fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path
                                            d="M41.8,37.432l3.0237.0043a2.306,2.306,0,0,0,2.3119-2.3956,26.1079,26.1079,0,0,0-4.9937-14.8856l-3.56-8.009a2.3955,2.3955,0,0,0-2.189-1.4224H30.9247a1.3357,1.3357,0,0,0-1.3357,1.3357V37.44h3.1155"
                                            fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <circle cx="37.252" cy="38.6127" r="4.5475" fill="none" stroke="#1e1e1e"
                                                stroke-linecap="round" stroke-linejoin="round"></circle>
                                        <circle cx="15.673" cy="38.5136" r="4.5475" fill="none" stroke="#1e1e1e"
                                                stroke-linecap="round" stroke-linejoin="round"></circle>
                                        <g id="bf7a5b6a-2089-4b0b-a08c-4304225b95d9" data-name="bottles">
                                            <path
                                                d="M14.3551,9.6536V2.5442a.7378.7378,0,0,0-.7478-.723h-1.89a.7379.7379,0,0,0-.7479.723V9.6536"
                                                fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path
                                                d="M10.97,9.6536a4.63,4.63,0,0,0-2.9186,4.2883V28.05a1.4324,1.4324,0,0,0,1.4316,1.4333h6.3593A1.4325,1.4325,0,0,0,17.2738,28.05V13.9419a4.63,4.63,0,0,0-2.9187-4.2883"
                                                fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <g id="b6da87ca-5a04-4741-b49c-314aa2b57fff" data-name="winelist">
                                                <path
                                                    d="M23.0106,11.4376v-6.47a.6715.6715,0,0,0-.68-.6579H20.61a.6715.6715,0,0,0-.68.6579v6.47"
                                                    fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path
                                                    d="M19.93,11.4376A4.2137,4.2137,0,0,0,17.2738,15.34v12.839a1.3036,1.3036,0,0,0,1.3029,1.3043h5.7871a1.3036,1.3036,0,0,0,1.3029-1.3043V15.34a4.2137,4.2137,0,0,0-2.6561-3.9025"
                                                    fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </g>
                                            <line x1="10.9698" y1="4.3099" x2="14.3551" y2="4.3099" fill="none"
                                                  stroke="#1e1e1e" stroke-linecap="round"
                                                  stroke-linejoin="round"></line>
                                            <line x1="19.9299" y1="6.9951" x2="23.0106" y2="6.9951" fill="none"
                                                  stroke="#1e1e1e" stroke-linecap="round"
                                                  stroke-linejoin="round"></line>
                                            <rect x="10.3573" y="14.9214" width="4.7633" height="6.1471" fill="none"
                                                  stroke="#1e1e1e" stroke-linecap="round"
                                                  stroke-linejoin="round"></rect>
                                            <rect x="19.4004" y="15.778" width="4.1398" height="6.6356" fill="none"
                                                  stroke="#1e1e1e" stroke-linecap="round"
                                                  stroke-linejoin="round"></rect>
                                        </g>
                                        <circle cx="15.673" cy="38.5136" r="0.5465" fill="none" stroke="#1e1e1e"
                                                stroke-linecap="round" stroke-linejoin="round"></circle>
                                        <circle cx="37.252" cy="38.6127" r="0.5465" fill="none" stroke="#1e1e1e"
                                                stroke-linecap="round" stroke-linejoin="round"></circle>
                                    </g>
                                    <line x1="4.7206" y1="20.4924" x2="5.8575" y2="20.4924" fill="none" stroke="#1e1e1e"
                                          stroke-linecap="round" stroke-linejoin="round"></line>
                                    <line x1="37.5429" y1="22.4567" x2="41.5161" y2="22.3287" fill="none"
                                          stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></line>
                                </g>
                            </g>
                        </svg>
                        Careful delivery right to your doorstep</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                             className="vivinoBulletPoints_vivinoQualityIcon__EakgS" aria-hidden="true"
                             data-acsb-hidden="true" data-acsb-force-hidden="true">
                            <g id="f7d45d16-a6a5-480a-a631-41c858fdc501" data-name="48">
                                <g id="a0439902-721a-471b-ba52-c5cf42ed2609" data-name="ratings">
                                    <g id="e9fd6674-e1bb-4bc5-9e77-ebcb2a0a6b54" data-name="stars">
                                        <path
                                            d="M45.1513,20.56a.9491.9491,0,0,0,.2225-.9446.8768.8768,0,0,0-.7028-.627l-6.9586-1.0612a.7622.7622,0,0,1-.5762-.4408l-3.11-6.6059a.8774.8774,0,0,0-1.5562.0006l-3.11,6.6107a.7706.7706,0,0,1-.5751.4354l-6.9586,1.0612a.8772.8772,0,0,0-.7028.6258.9477.9477,0,0,0,.2225.9446l5.035,5.1455a.8177.8177,0,0,1,.2145.7067L25.41,33.6686a.9354.9354,0,0,0,.3446.8994.8209.8209,0,0,0,.9127.0738l6.2239-3.4312a.7343.7343,0,0,1,.721.0036L39.83,34.6406a.8287.8287,0,0,0,.915-.0726.9393.9393,0,0,0,.3434-.8994L39.9,26.4018a.8068.8068,0,0,1,.2122-.6912Z"
                                            fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                    <g id="acb93f66-3a8e-4585-aff1-3fef548af26f" data-name="rosé">
                                        <path d="M17.8535,27.8551c.1549-.1293,3.6046-2.5295,5.9923-4.6422" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M27.1955,17.933a15.5984,15.5984,0,0,0-.0438-5.8817c-.5925-3.4-1.9545-9.57-1.9545-9.57H10.5113s-1.3619,6.1691-1.9544,9.57c-.7016,4.0291-.1833,7.1834,1.54,9.3807,1.74,2.2174,7.5555,6.2543,7.7562,6.4231"
                                            fill="none" stroke="#1e1e1e" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <line x1="17.8539" y1="27.8551" x2="17.8539" y2="43.6809" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></line>
                                        <line x1="9.4539" y1="43.6809" x2="26.2539" y2="43.6809" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></line>
                                        <line x1="8.5565" y1="14.3983" x2="27.1513" y2="14.3983" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></line>
                                        <line x1="9.0382" y1="19.2817" x2="11.361" y2="16.8924" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></line>
                                        <line x1="10.7787" y1="21.6776" x2="15.3827" y2="17.1654" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></line>
                                        <line x1="12.7432" y1="23.9673" x2="18.6685" y2="18.1602" fill="none"
                                              stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round"></line>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        Check honest reviews of any wine before purchase</div>
                </div>
            </div>
            {/* <div className={"company-contact"}>
                <p>App | About | Contact | Press | Wine News </p>
            </div> */}
        </div>
    )
}

export default Footer