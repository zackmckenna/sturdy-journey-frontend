/* eslint-disable */

import React from "react"
import { connect } from 'react-redux'

function SvgRules(props) {
  if(props.session.inGame) {
    const currentGame = props.games.filter(game => game.numberPlayer === props.session.currentNumberPlayers)[0]
    console.log(currentGame)
    if (currentGame){
      return (
        <svg width="100%" height="100%" viewBox="0 0 329 257" {...props}>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 196.384)">
              <rect stroke="#E3E0E6" width={147} height={60} rx={5} />
              <g transform="translate(8 8)">
                <circle fill="#FFF" cx={20} cy={20} r={19} />
                <path
                  d="M20 38c-9.925 0-18-8.075-18-18S10.075 2 20 2s18 8.075 18 18-8.075 18-18 18m0-38C8.972 0 0 8.972 0 20s8.972 20 20 20 20-8.972 20-20S31.028 0 20 0"
                  fill="#A7A2C1"
                />
                <path
                  d="M31.97 23.928a2.067 2.067 0 00-.102.148L30.77 22.99c.397-.957.66-1.95.79-2.967.556.673 1.033 1.573.964 2.647-.004.063-.008.06 0 .123 0 .004-.012.425-.554 1.134zm-3.477 2.122c0 .405-.33.734-.734.734h-2.744a1 1 0 00-1 1v2.42a.949.949 0 01-.947.949h-6.373a.949.949 0 01-.947-.948v-2.421a1 1 0 00-1-1h-2.744a.734.734 0 01-.734-.734v-2.847c0-.151-.034-.3-.101-.437a9.604 9.604 0 01-.977-4.23c0-.194.018-.384.029-.577h19.32c.012.193.03.383.03.578a9.604 9.604 0 01-.977 4.229.993.993 0 00-.101.437v2.847zM19.882 8.848c2.926 0 5.547 1.309 7.326 3.367-2.013-.79-4.57-1.25-7.326-1.25-2.756 0-5.314.46-7.327 1.25a9.662 9.662 0 017.327-3.367zm-9.301 6.994c1.069-1.45 4.539-2.876 9.3-2.876 4.762 0 8.232 1.428 9.3 2.876.012.039.02.078.03.117h-18.66l.03-.117zm23.943 6.9c.154-2.861-2.052-4.772-3.025-5.472-.014-.133-.041-.261-.06-.393-.002-.021.008-.043.005-.064-.022-.145-.054-.288-.081-.433-.018-.096-.033-.191-.053-.286a11.65 11.65 0 00-.244-.961c-.002-.006-.007-.012-.01-.018-1.465-4.78-5.92-8.267-11.174-8.267-5.256 0-9.71 3.486-11.177 8.267l-.008.019c-.095.314-.174.633-.243.954-.021.098-.037.198-.055.298-.027.142-.058.283-.08.426-.003.022.006.043.005.065a11.665 11.665 0 00-.132 1.66c0 1.7.362 3.344 1.078 4.89v2.623a2.736 2.736 0 002.734 2.734h1.744v1.42a2.951 2.951 0 002.947 2.949h6.373a2.951 2.951 0 002.947-2.948v-1.421h1.744a2.737 2.737 0 002.734-2.734v-.521l1.389 1.373a.997.997 0 001.088.212 1 1 0 00.615-.923l-.024-1.05c.887-1.16.972-2.05.963-2.4z"
                  fill="#463B83"
                />
                <path
                  d="M16.313 23.821a1.246 1.246 0 11.002-2.488 1.246 1.246 0 01-.003 2.488m0-4.49a3.248 3.248 0 00-3.245 3.245 3.248 3.248 0 003.245 3.245 3.248 3.248 0 003.245-3.245 3.248 3.248 0 00-3.244-3.245M23.45 23.821a1.246 1.246 0 11.002-2.488 1.246 1.246 0 01-.002 2.488m0-4.49a3.25 3.25 0 00-3.245 3.245 3.25 3.25 0 003.245 3.245 3.248 3.248 0 003.245-3.245 3.248 3.248 0 00-3.245-3.245"
                  fill="#463B83"
                />
                <g>
                  <g transform="translate(-2 -3)">
                    <circle fill="#56DF4D" cx={7.5} cy={8.5} r={7.5} />
                    <text
                      fontFamily="Bitter-Bold, Bitter"
                      fontSize={11}
                      fontWeight="bold"
                      fill="#322931"
                    >
                      <tspan x={3.43} y={12}>
                        {currentGame.numberMate}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <text fontFamily="Bitter-Regular, Bitter" fontSize={16} fill="#FFF">
                <tspan x={56} y={23}>
                  {'First'}
                </tspan>
                <tspan x={56} y={42}>
                  {'Mate'}
                </tspan>
              </text>
            </g>
            <g transform="translate(180 120.384)">
              <rect stroke="#E3E0E6" width={147} height={68} rx={5} />
              <g transform="translate(8 8)">
                <circle fill="#FFF" cx={20} cy={20} r={19} />
                <path
                  d="M20 2C10.075 2 2 10.075 2 20s8.075 18 18 18 18-8.075 18-18S29.925 2 20 2m0 38C8.972 40 0 31.028 0 20S8.972 0 20 0s20 8.972 20 20-8.972 20-20 20"
                  fill="#A7A2C1"
                />
                <path
                  d="M28.067 18.396c-.561-.355-1.411-.774-2.317-.774a1 1 0 00-.991.863c-.021.155-.16 1.279.18 2.348-.836.649-2.956 2.012-7.416 3.45l-.764-1.215c1.587-1.176 5.145-4.046 7.025-7.396 1.804.486 4.51.683 6.862-.487a9.284 9.284 0 01-2.58 3.211m4.745-6.957a1 1 0 00-1.138.344c-2.755 3.684-7.82 1.825-8.032 1.745a.999.999 0 00-1.264.51c-1.936 4.142-7.47 7.898-7.524 7.934a1 1 0 00-.29 1.362L16.24 26a1.001 1.001 0 001.14.424c7.328-2.247 9.33-4.445 9.536-4.69.28-.336.312-.817.074-1.185a1.69 1.69 0 01-.214-.593c.289.162.528.34.638.434a.998.998 0 001.226.07c4.565-3.148 4.824-7.837 4.833-8.036a.998.998 0 00-.662-.984"
                  fill="#463B83"
                />
                <path
                  d="M14.057 27.467a1.57 1.57 0 01-.713.98 1.568 1.568 0 01-1.197.189 1.573 1.573 0 01-.98-.713l-.466-.763 2.644-1.745.523.855c.221.36.288.786.19 1.197zm-.517-4.676l.511-1.48a.769.769 0 00-1.452-.5l-.629 1.822a.766.766 0 00.071.65l.502.822-2.395 1.58a1.562 1.562 0 10-.548 2.62l.257.42a3.093 3.093 0 002.311 1.47 3.086 3.086 0 001.977-.438 3.097 3.097 0 001.405-1.931 3.096 3.096 0 00-.372-2.357L13.54 22.79z"
                  fill="#463B83"
                />
                <g>
                  <g transform="translate(-2 -3)">
                    <circle fill="#56DF4D" cx={7.5} cy={8.5} r={7.5} />
                    <text
                      fontFamily="Bitter-Bold, Bitter"
                      fontSize={11}
                      fontWeight="bold"
                      fill="#322931"
                    >
                      <tspan x={3.43} y={12}>
                        {currentGame.numberMutineer}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <text fontFamily="Bitter-Regular, Bitter" fontSize={16} fill="#FFF">
                <tspan x={56} y={23}>
                  {"Mutineer"}
                </tspan>
              </text>
              <text fontFamily="Bitter-Regular, Bitter" fontSize={12} fill="#FFF">
                <tspan x={56} y={40}>
                  {"Cannot call "}
                </tspan>
                <tspan x={56} y={54}>
                  {"stop"}
                </tspan>
              </text>
            </g>
            <g transform="translate(1 120.384)">
              <rect stroke="#E3E0E6" width={147} height={60} rx={5} />
              <g transform="translate(8 8)">
                <circle fill="#FFF" cx={20} cy={20} r={19} />
                <path
                  d="M20 38c-9.925 0-18-8.075-18-18S10.075 2 20 2s18 8.075 18 18-8.075 18-18 18m0-38C8.972 0 0 8.972 0 20s8.972 20 20 20 20-8.972 20-20S31.028 0 20 0"
                  fill="#56DF4D"
                />
                <path
                  d="M29.757 26.775c-.47.091-1.26.068-2.728-1.14-.145-.12-.288-.226-.43-.336-.045-.048-.073-.109-.126-.148-3.226-2.383-6.109-2.446-6.404-2.446h-.055c-.152 0-3.469-.017-7.044 2.93-1.467 1.21-2.256 1.232-2.728 1.14-1.055-.2-2.22-1.472-3.65-3.984 1.338-.658 3.316-1.914 4.27-3.925 1.288-2.713 3.381-6.096 5.248-7.185A4.64 4.64 0 0020 13.78a4.64 4.64 0 003.89-2.099c1.864 1.086 3.958 4.472 5.246 7.186.955 2.011 2.933 3.267 4.271 3.924-1.43 2.513-2.595 3.784-3.65 3.985m-9.694.03c-1.798 0-3.534.395-4.943 1.107v-1.35c2.59-1.803 4.807-1.855 4.918-1.856.251.006 2.371.122 4.841 1.815v1.324c-1.385-.675-3.05-1.04-4.816-1.04m15.44-4.712a1.556 1.556 0 00-.842-.924c-.845-.375-2.898-1.434-3.718-3.16-.779-1.644-3.566-7.105-6.7-8.38a1.485 1.485 0 00-1.88.706A2.653 2.653 0 0120 11.78a2.652 2.652 0 01-2.363-1.442 1.482 1.482 0 00-1.886-.706c-3.127 1.273-5.915 6.734-6.695 8.377-.82 1.727-2.873 2.786-3.716 3.161a1.557 1.557 0 00-.844.923c-.139.412-.098.868.112 1.248 1.897 3.443 3.47 5.058 5.258 5.4.236.045.473.067.71.067.816 0 1.652-.28 2.544-.83v1.227a1.276 1.276 0 002.044 1.019c1.208-.9 2.994-1.418 4.9-1.418 1.844 0 3.593.491 4.798 1.345a1.275 1.275 0 002.017-1.039v-1.124c1.155.711 2.212.953 3.253.753 1.79-.342 3.362-1.957 5.26-5.4.21-.38.25-.835.111-1.247"
                  fill="#463B83"
                />
                <path
                  d="M22.769 15.778a.999.999 0 00-1.414 0L20 17.132l-1.355-1.354a.999.999 0 10-1.414 1.414l1.355 1.355-1.355 1.355a.999.999 0 101.414 1.414L20 19.961l1.355 1.355a.997.997 0 001.414 0 .999.999 0 000-1.414l-1.355-1.355 1.355-1.355a.999.999 0 000-1.414"
                  fill="#463B83"
                />
                <g>
                  <g transform="translate(-2 -3)">
                    <circle fill="#56DF4D" cx={7.5} cy={8.5} r={7.5} />
                    <text
                      fontFamily="Bitter-Bold, Bitter"
                      fontSize={11}
                      fontWeight="bold"
                      fill="#322931"
                    >
                      <tspan x={3.43} y={12}>
                        {'?'}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <text fontFamily="Bitter-Regular, Bitter" fontSize={16} fill="#FFF">
                <tspan x={56} y={23}>
                  {"The"}
                </tspan>
                <tspan x={56} y={42}>
                  {"Captain"}
                </tspan>
              </text>
            </g>
            <g transform="translate(181 36)">
              <rect stroke="#E3E0E6" width={147} height={60} rx={5} />
              <g transform="translate(8 8)">
                <circle fill="#FFF" cx={20} cy={20} r={19} />
                <path
                  d="M20 2C10.075 2 2 10.075 2 20s8.075 18 18 18 18-8.075 18-18S29.925 2 20 2m0 38C8.972 40 0 31.028 0 20S8.972 0 20 0s20 8.972 20 20-8.972 20-20 20"
                  fill="#56DF4D"
                />
                <path
                  d="M18.237 27.253c.474-.583 1.13-1.74 1.54-3.122.412 1.382 1.067 2.539 1.542 3.122.085.104.187.183.28.275-.55.11-1.144.213-1.821.3a25.901 25.901 0 01-1.812-.298c.09-.09.188-.174.27-.277zm1.728-14.53l.609 5.355c-.35.439-.61.904-.796 1.386a5.254 5.254 0 00-.771-1.355l.958-5.385zm7.96 5.984c-.532-1.661-2.608-6.222-2.697-6.415a.999.999 0 10-1.819.83c.02.046 2.115 4.645 2.61 6.194.199.62.106.844-1.217 1.45a1.002 1.002 0 00-.457 1.396c.91 1.636 1.556 3.874.99 4.199-.878.508-1.871.36-2.465-.37-.407-.501-2.726-4.593-.53-6.898.206-.215.304-.51.27-.804L21.177 5.678a.999.999 0 00-.962-.886c-.457-.047-.93.335-1.016.824l-2.244 12.612a1 1 0 00.26.865c2.198 2.305-.121 6.397-.53 6.898-.591.73-1.581.88-2.465.37-.565-.325.08-2.563.992-4.2a1.005 1.005 0 00-.46-1.396c-1.32-.605-1.414-.828-1.216-1.45.496-1.547 2.59-6.147 2.612-6.193a1 1 0 10-1.82-.83c-.088.193-2.164 4.754-2.696 6.415-.585 1.828.405 2.824 1.363 3.404-.77 1.66-1.847 4.774.216 5.975.002 0 .003.003.004.004l.006.003.003.002c.109.064 1.868 1.039 5.555 1.604v5.192a1 1 0 002 0v-5.192c2.617-.401 4.263-1.004 5.03-1.347l.048-.021c.286-.13.444-.218.475-.235l.004-.002v-.001l.006-.003.005-.004c2.063-1.201.986-4.315.215-5.976.959-.58 1.949-1.575 1.364-3.403z"
                  fill="#463B83"
                />
                <g>
                  <g transform="translate(-2 -3)">
                    <circle fill="#56DF4D" cx={7.5} cy={8.5} r={7.5} />
                    <text
                      fontFamily="Bitter-Bold, Bitter"
                      fontSize={11}
                      fontWeight="bold"
                      fill="#322931"
                    >
                      <tspan x={3.43} y={12}>
                        {"?"}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <text fontFamily="Bitter-Regular, Bitter" fontSize={16} fill="#FFF">
                <tspan x={56} y={23}>
                  {"The Sea "}
                </tspan>
                <tspan x={56} y={42}>
                  {"Witch"}
                </tspan>
              </text>
            </g>
            <g transform="translate(1 36)">
              <rect stroke="#E3E0E6" width={147} height={60} rx={5} />
              <g transform="translate(8.055 8)">
                <circle fill="#FFF" cx={20} cy={20} r={19} />
                <path
                  d="M20 2C10.075 2 2 10.075 2 20s8.075 18 18 18 18-8.075 18-18S29.925 2 20 2m0 38C8.972 40 0 31.028 0 20S8.972 0 20 0s20 8.972 20 20-8.972 20-20 20"
                  fill="#A7A2C1"
                />
                <path
                  d="M30.45 15.128L24.872 9.55l.357-.358 5.578 5.579-.357.357zm-7.956 6.483l-.049-.048v-.002l-4.006-4.005-.05-.051 5.805-5.805 2.052 2.053 2.054 2.053-5.806 5.805zm-5.259 3.746l-.098-.1-1.198-1.196-1.295-1.296 3.088-3.088 2.591 2.59-3.088 3.09zm-4.378 2.765l-.49-.49-.489-.49 2.158-2.157.49.49.488.489-2.157 2.158zm-1.074 2.687l-2.59-2.592.465-.466 1.295 1.296 1.197 1.196h.001l.098.099-.466.467zM32.93 14.064L25.936 7.07a1 1 0 00-1.414 0L22.75 8.843a1 1 0 000 1.414l.03.029-6.513 6.512a1 1 0 000 1.414l.051.05-3.795 3.796a.999.999 0 000 1.414l.1.099-2.159 2.158-.099-.1a.999.999 0 00-1.414 0l-1.88 1.88a.996.996 0 000 1.415l4.004 4.006a1.004 1.004 0 001.415 0l1.88-1.881a.999.999 0 000-1.414l-.099-.1 2.158-2.157.1.1a1.002 1.002 0 001.413 0l3.795-3.796.05.05a1 1 0 001.414 0l6.513-6.512.03.029a.997.997 0 001.413 0l1.772-1.771a1 1 0 000-1.414z"
                  fill="#463B83"
                />
                <g>
                  <g transform="translate(-2 -3)">
                    <circle fill="#56DF4D" cx={7.5} cy={8.5} r={7.5} />
                    <text
                      fontFamily="Bitter-Bold, Bitter"
                      fontSize={11}
                      fontWeight="bold"
                      fill="#322931"
                    >
                      <tspan x={3.43} y={12}>
                        {'1'}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <text fontFamily="Bitter-Regular, Bitter" fontSize={16} fill="#FFF">
                <tspan x={56.055} y={23}>
                  {"The"}
                </tspan>
                <tspan x={56.055} y={42}>
                  {"Lookout"}
                </tspan>
              </text>
            </g>
            <text
              fontFamily="Bitter-Bold, Bitter"
              fontSize={18}
              fontWeight="bold"
              fill="#FFF"
              transform="translate(1 -5)"
            >
              <tspan x={0} y={20}>
                {"The Good Team:"}
              </tspan>
            </text>
            <text
              fontFamily="Bitter-Bold, Bitter"
              fontSize={18}
              fontWeight="bold"
              fill="#FFF"
              transform="translate(1 -5)"
            >
              <tspan x={179} y={20}>
                {"The Evil Team:"}
              </tspan>
            </text>
            <path
              d="M196.397 195.561l.054.078 4.5 8a.5.5 0 01-.82.565l-.052-.075-3.564-6.337v27.592a.5.5 0 01-.41.492l-.09.008H148a.5.5 0 01-.09-.992l.09-.008h47.515v-27.092l-3.564 6.337a.5.5 0 01-.599.228l-.082-.037a.5.5 0 01-.228-.599l.037-.082 4.5-8a.5.5 0 01.818-.078zM163.936 61.255a.5.5 0 01-.116.63l-.075.05-6.337 3.565H181a.5.5 0 01.09.992l-.09.008h-23.592l6.337 3.564a.5.5 0 01.228.599l-.037.082a.5.5 0 01-.599.228l-.082-.037-8-4.5a.5.5 0 01-.078-.818l.078-.054 8-4.5a.5.5 0 01.68.19zM74.5 95.884a.5.5 0 01.492.41l.008.09v13.591l3.564-6.336a.5.5 0 01.909.408l-.037.082-4.5 8a.5.5 0 01-.818.078l-.054-.078-4.5-8a.5.5 0 01.82-.564l.052.074L74 109.975v-13.59a.5.5 0 01.5-.5zM155.936 145.639a.5.5 0 01-.116.63l-.075.05-6.337 3.565H172a.5.5 0 01.09.992l-.09.008h-22.592l6.337 3.564a.5.5 0 01.228.599l-.037.082a.5.5 0 01-.599.228l-.082-.037-8-4.5a.5.5 0 01-.078-.818l.078-.054 8-4.5a.5.5 0 01.68.191z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </g>
        </svg>
      );
    }
  }
  return (
    <svg width="100%" height="50%" viewBox="0 0 329 257" {...props}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 196.384)">
          <rect stroke="#E3E0E6" width={147} height={60} rx={5} />
          <g transform="translate(8 8)">
            <circle fill="#FFF" cx={20} cy={20} r={19} />
            <path
              d="M20 38c-9.925 0-18-8.075-18-18S10.075 2 20 2s18 8.075 18 18-8.075 18-18 18m0-38C8.972 0 0 8.972 0 20s8.972 20 20 20 20-8.972 20-20S31.028 0 20 0"
              fill="#A7A2C1"
            />
            <path
              d="M31.97 23.928a2.067 2.067 0 00-.102.148L30.77 22.99c.397-.957.66-1.95.79-2.967.556.673 1.033 1.573.964 2.647-.004.063-.008.06 0 .123 0 .004-.012.425-.554 1.134zm-3.477 2.122c0 .405-.33.734-.734.734h-2.744a1 1 0 00-1 1v2.42a.949.949 0 01-.947.949h-6.373a.949.949 0 01-.947-.948v-2.421a1 1 0 00-1-1h-2.744a.734.734 0 01-.734-.734v-2.847c0-.151-.034-.3-.101-.437a9.604 9.604 0 01-.977-4.23c0-.194.018-.384.029-.577h19.32c.012.193.03.383.03.578a9.604 9.604 0 01-.977 4.229.993.993 0 00-.101.437v2.847zM19.882 8.848c2.926 0 5.547 1.309 7.326 3.367-2.013-.79-4.57-1.25-7.326-1.25-2.756 0-5.314.46-7.327 1.25a9.662 9.662 0 017.327-3.367zm-9.301 6.994c1.069-1.45 4.539-2.876 9.3-2.876 4.762 0 8.232 1.428 9.3 2.876.012.039.02.078.03.117h-18.66l.03-.117zm23.943 6.9c.154-2.861-2.052-4.772-3.025-5.472-.014-.133-.041-.261-.06-.393-.002-.021.008-.043.005-.064-.022-.145-.054-.288-.081-.433-.018-.096-.033-.191-.053-.286a11.65 11.65 0 00-.244-.961c-.002-.006-.007-.012-.01-.018-1.465-4.78-5.92-8.267-11.174-8.267-5.256 0-9.71 3.486-11.177 8.267l-.008.019c-.095.314-.174.633-.243.954-.021.098-.037.198-.055.298-.027.142-.058.283-.08.426-.003.022.006.043.005.065a11.665 11.665 0 00-.132 1.66c0 1.7.362 3.344 1.078 4.89v2.623a2.736 2.736 0 002.734 2.734h1.744v1.42a2.951 2.951 0 002.947 2.949h6.373a2.951 2.951 0 002.947-2.948v-1.421h1.744a2.737 2.737 0 002.734-2.734v-.521l1.389 1.373a.997.997 0 001.088.212 1 1 0 00.615-.923l-.024-1.05c.887-1.16.972-2.05.963-2.4z"
              fill="#463B83"
            />
            <path
              d="M16.313 23.821a1.246 1.246 0 11.002-2.488 1.246 1.246 0 01-.003 2.488m0-4.49a3.248 3.248 0 00-3.245 3.245 3.248 3.248 0 003.245 3.245 3.248 3.248 0 003.245-3.245 3.248 3.248 0 00-3.244-3.245M23.45 23.821a1.246 1.246 0 11.002-2.488 1.246 1.246 0 01-.002 2.488m0-4.49a3.25 3.25 0 00-3.245 3.245 3.25 3.25 0 003.245 3.245 3.248 3.248 0 003.245-3.245 3.248 3.248 0 00-3.245-3.245"
              fill="#463B83"
            />
            <g>
              <g transform="translate(-2 -3)">
                <circle fill="#56DF4D" cx={7.5} cy={8.5} r={7.5} />
                <text
                  fontFamily="Bitter-Bold, Bitter"
                  fontSize={11}
                  fontWeight="bold"
                  fill="#322931"
                >
                  <tspan x={3.43} y={12}>
                    {"X"}
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <text fontFamily="Bitter-Regular, Bitter" fontSize={16} fill="#FFF">
            <tspan x={56} y={23}>
              {"First"}
            </tspan>
            <tspan x={56} y={42}>
              {"Mate"}
            </tspan>
          </text>
        </g>
        <g transform="translate(180 120.384)">
          <rect stroke="#E3E0E6" width={147} height={68} rx={5} />
          <g transform="translate(8 8)">
            <circle fill="#FFF" cx={20} cy={20} r={19} />
            <path
              d="M20 2C10.075 2 2 10.075 2 20s8.075 18 18 18 18-8.075 18-18S29.925 2 20 2m0 38C8.972 40 0 31.028 0 20S8.972 0 20 0s20 8.972 20 20-8.972 20-20 20"
              fill="#A7A2C1"
            />
            <path
              d="M28.067 18.396c-.561-.355-1.411-.774-2.317-.774a1 1 0 00-.991.863c-.021.155-.16 1.279.18 2.348-.836.649-2.956 2.012-7.416 3.45l-.764-1.215c1.587-1.176 5.145-4.046 7.025-7.396 1.804.486 4.51.683 6.862-.487a9.284 9.284 0 01-2.58 3.211m4.745-6.957a1 1 0 00-1.138.344c-2.755 3.684-7.82 1.825-8.032 1.745a.999.999 0 00-1.264.51c-1.936 4.142-7.47 7.898-7.524 7.934a1 1 0 00-.29 1.362L16.24 26a1.001 1.001 0 001.14.424c7.328-2.247 9.33-4.445 9.536-4.69.28-.336.312-.817.074-1.185a1.69 1.69 0 01-.214-.593c.289.162.528.34.638.434a.998.998 0 001.226.07c4.565-3.148 4.824-7.837 4.833-8.036a.998.998 0 00-.662-.984"
              fill="#463B83"
            />
            <path
              d="M14.057 27.467a1.57 1.57 0 01-.713.98 1.568 1.568 0 01-1.197.189 1.573 1.573 0 01-.98-.713l-.466-.763 2.644-1.745.523.855c.221.36.288.786.19 1.197zm-.517-4.676l.511-1.48a.769.769 0 00-1.452-.5l-.629 1.822a.766.766 0 00.071.65l.502.822-2.395 1.58a1.562 1.562 0 10-.548 2.62l.257.42a3.093 3.093 0 002.311 1.47 3.086 3.086 0 001.977-.438 3.097 3.097 0 001.405-1.931 3.096 3.096 0 00-.372-2.357L13.54 22.79z"
              fill="#463B83"
            />
            <g>
              <g transform="translate(-2 -3)">
                <circle fill="#56DF4D" cx={7.5} cy={8.5} r={7.5} />
                <text
                  fontFamily="Bitter-Bold, Bitter"
                  fontSize={11}
                  fontWeight="bold"
                  fill="#322931"
                >
                  <tspan x={3.43} y={12}>
                    {"X"}
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <text fontFamily="Bitter-Regular, Bitter" fontSize={16} fill="#FFF">
            <tspan x={56} y={23}>
              {"Mutineer"}
            </tspan>
          </text>
          <text fontFamily="Bitter-Regular, Bitter" fontSize={12} fill="#FFF">
            <tspan x={56} y={40}>
              {"Cannot call "}
            </tspan>
            <tspan x={56} y={54}>
              {"stop"}
            </tspan>
          </text>
        </g>
        <g transform="translate(1 120.384)">
          <rect stroke="#E3E0E6" width={147} height={60} rx={5} />
          <g transform="translate(8 8)">
            <circle fill="#FFF" cx={20} cy={20} r={19} />
            <path
              d="M20 38c-9.925 0-18-8.075-18-18S10.075 2 20 2s18 8.075 18 18-8.075 18-18 18m0-38C8.972 0 0 8.972 0 20s8.972 20 20 20 20-8.972 20-20S31.028 0 20 0"
              fill="#56DF4D"
            />
            <path
              d="M29.757 26.775c-.47.091-1.26.068-2.728-1.14-.145-.12-.288-.226-.43-.336-.045-.048-.073-.109-.126-.148-3.226-2.383-6.109-2.446-6.404-2.446h-.055c-.152 0-3.469-.017-7.044 2.93-1.467 1.21-2.256 1.232-2.728 1.14-1.055-.2-2.22-1.472-3.65-3.984 1.338-.658 3.316-1.914 4.27-3.925 1.288-2.713 3.381-6.096 5.248-7.185A4.64 4.64 0 0020 13.78a4.64 4.64 0 003.89-2.099c1.864 1.086 3.958 4.472 5.246 7.186.955 2.011 2.933 3.267 4.271 3.924-1.43 2.513-2.595 3.784-3.65 3.985m-9.694.03c-1.798 0-3.534.395-4.943 1.107v-1.35c2.59-1.803 4.807-1.855 4.918-1.856.251.006 2.371.122 4.841 1.815v1.324c-1.385-.675-3.05-1.04-4.816-1.04m15.44-4.712a1.556 1.556 0 00-.842-.924c-.845-.375-2.898-1.434-3.718-3.16-.779-1.644-3.566-7.105-6.7-8.38a1.485 1.485 0 00-1.88.706A2.653 2.653 0 0120 11.78a2.652 2.652 0 01-2.363-1.442 1.482 1.482 0 00-1.886-.706c-3.127 1.273-5.915 6.734-6.695 8.377-.82 1.727-2.873 2.786-3.716 3.161a1.557 1.557 0 00-.844.923c-.139.412-.098.868.112 1.248 1.897 3.443 3.47 5.058 5.258 5.4.236.045.473.067.71.067.816 0 1.652-.28 2.544-.83v1.227a1.276 1.276 0 002.044 1.019c1.208-.9 2.994-1.418 4.9-1.418 1.844 0 3.593.491 4.798 1.345a1.275 1.275 0 002.017-1.039v-1.124c1.155.711 2.212.953 3.253.753 1.79-.342 3.362-1.957 5.26-5.4.21-.38.25-.835.111-1.247"
              fill="#463B83"
            />
            <path
              d="M22.769 15.778a.999.999 0 00-1.414 0L20 17.132l-1.355-1.354a.999.999 0 10-1.414 1.414l1.355 1.355-1.355 1.355a.999.999 0 101.414 1.414L20 19.961l1.355 1.355a.997.997 0 001.414 0 .999.999 0 000-1.414l-1.355-1.355 1.355-1.355a.999.999 0 000-1.414"
              fill="#463B83"
            />
            <g>
              <g transform="translate(-2 -3)">
                <circle fill="#56DF4D" cx={7.5} cy={8.5} r={7.5} />
                <text
                  fontFamily="Bitter-Bold, Bitter"
                  fontSize={11}
                  fontWeight="bold"
                  fill="#322931"
                >
                  <tspan x={3.43} y={12}>
                    {"X"}
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <text fontFamily="Bitter-Regular, Bitter" fontSize={16} fill="#FFF">
            <tspan x={56} y={23}>
              {"The"}
            </tspan>
            <tspan x={56} y={42}>
              {"Captain"}
            </tspan>
          </text>
        </g>
        <g transform="translate(181 36)">
          <rect stroke="#E3E0E6" width={147} height={60} rx={5} />
          <g transform="translate(8 8)">
            <circle fill="#FFF" cx={20} cy={20} r={19} />
            <path
              d="M20 2C10.075 2 2 10.075 2 20s8.075 18 18 18 18-8.075 18-18S29.925 2 20 2m0 38C8.972 40 0 31.028 0 20S8.972 0 20 0s20 8.972 20 20-8.972 20-20 20"
              fill="#56DF4D"
            />
            <path
              d="M18.237 27.253c.474-.583 1.13-1.74 1.54-3.122.412 1.382 1.067 2.539 1.542 3.122.085.104.187.183.28.275-.55.11-1.144.213-1.821.3a25.901 25.901 0 01-1.812-.298c.09-.09.188-.174.27-.277zm1.728-14.53l.609 5.355c-.35.439-.61.904-.796 1.386a5.254 5.254 0 00-.771-1.355l.958-5.385zm7.96 5.984c-.532-1.661-2.608-6.222-2.697-6.415a.999.999 0 10-1.819.83c.02.046 2.115 4.645 2.61 6.194.199.62.106.844-1.217 1.45a1.002 1.002 0 00-.457 1.396c.91 1.636 1.556 3.874.99 4.199-.878.508-1.871.36-2.465-.37-.407-.501-2.726-4.593-.53-6.898.206-.215.304-.51.27-.804L21.177 5.678a.999.999 0 00-.962-.886c-.457-.047-.93.335-1.016.824l-2.244 12.612a1 1 0 00.26.865c2.198 2.305-.121 6.397-.53 6.898-.591.73-1.581.88-2.465.37-.565-.325.08-2.563.992-4.2a1.005 1.005 0 00-.46-1.396c-1.32-.605-1.414-.828-1.216-1.45.496-1.547 2.59-6.147 2.612-6.193a1 1 0 10-1.82-.83c-.088.193-2.164 4.754-2.696 6.415-.585 1.828.405 2.824 1.363 3.404-.77 1.66-1.847 4.774.216 5.975.002 0 .003.003.004.004l.006.003.003.002c.109.064 1.868 1.039 5.555 1.604v5.192a1 1 0 002 0v-5.192c2.617-.401 4.263-1.004 5.03-1.347l.048-.021c.286-.13.444-.218.475-.235l.004-.002v-.001l.006-.003.005-.004c2.063-1.201.986-4.315.215-5.976.959-.58 1.949-1.575 1.364-3.403z"
              fill="#463B83"
            />
            <g>
              <g transform="translate(-2 -3)">
                <circle fill="#56DF4D" cx={7.5} cy={8.5} r={7.5} />
                <text
                  fontFamily="Bitter-Bold, Bitter"
                  fontSize={11}
                  fontWeight="bold"
                  fill="#322931"
                >
                  <tspan x={3.43} y={12}>
                    {"X"}
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <text fontFamily="Bitter-Regular, Bitter" fontSize={16} fill="#FFF">
            <tspan x={56} y={23}>
              {"The Sea "}
            </tspan>
            <tspan x={56} y={42}>
              {"Witch"}
            </tspan>
          </text>
        </g>
        <g transform="translate(1 36)">
          <rect stroke="#E3E0E6" width={147} height={60} rx={5} />
          <g transform="translate(8.055 8)">
            <circle fill="#FFF" cx={20} cy={20} r={19} />
            <path
              d="M20 2C10.075 2 2 10.075 2 20s8.075 18 18 18 18-8.075 18-18S29.925 2 20 2m0 38C8.972 40 0 31.028 0 20S8.972 0 20 0s20 8.972 20 20-8.972 20-20 20"
              fill="#A7A2C1"
            />
            <path
              d="M30.45 15.128L24.872 9.55l.357-.358 5.578 5.579-.357.357zm-7.956 6.483l-.049-.048v-.002l-4.006-4.005-.05-.051 5.805-5.805 2.052 2.053 2.054 2.053-5.806 5.805zm-5.259 3.746l-.098-.1-1.198-1.196-1.295-1.296 3.088-3.088 2.591 2.59-3.088 3.09zm-4.378 2.765l-.49-.49-.489-.49 2.158-2.157.49.49.488.489-2.157 2.158zm-1.074 2.687l-2.59-2.592.465-.466 1.295 1.296 1.197 1.196h.001l.098.099-.466.467zM32.93 14.064L25.936 7.07a1 1 0 00-1.414 0L22.75 8.843a1 1 0 000 1.414l.03.029-6.513 6.512a1 1 0 000 1.414l.051.05-3.795 3.796a.999.999 0 000 1.414l.1.099-2.159 2.158-.099-.1a.999.999 0 00-1.414 0l-1.88 1.88a.996.996 0 000 1.415l4.004 4.006a1.004 1.004 0 001.415 0l1.88-1.881a.999.999 0 000-1.414l-.099-.1 2.158-2.157.1.1a1.002 1.002 0 001.413 0l3.795-3.796.05.05a1 1 0 001.414 0l6.513-6.512.03.029a.997.997 0 001.413 0l1.772-1.771a1 1 0 000-1.414z"
              fill="#463B83"
            />
            <g>
              <g transform="translate(-2 -3)">
                <circle fill="#56DF4D" cx={7.5} cy={8.5} r={7.5} />
                <text
                  fontFamily="Bitter-Bold, Bitter"
                  fontSize={11}
                  fontWeight="bold"
                  fill="#322931"
                >
                  <tspan x={3.43} y={12}>
                    {"X"}
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <text fontFamily="Bitter-Regular, Bitter" fontSize={16} fill="#FFF">
            <tspan x={56.055} y={23}>
              {"The"}
            </tspan>
            <tspan x={56.055} y={42}>
              {"Lookout"}
            </tspan>
          </text>
        </g>
        <text
          fontFamily="Bitter-Bold, Bitter"
          fontSize={18}
          fontWeight="bold"
          fill="#FFF"
          transform="translate(1 -5)"
        >
          <tspan x={0} y={20}>
            {"The Good Team:"}
          </tspan>
        </text>
        <text
          fontFamily="Bitter-Bold, Bitter"
          fontSize={18}
          fontWeight="bold"
          fill="#FFF"
          transform="translate(1 -5)"
        >
          <tspan x={179} y={20}>
            {"The Evil Team:"}
          </tspan>
        </text>
        <path
          d="M196.397 195.561l.054.078 4.5 8a.5.5 0 01-.82.565l-.052-.075-3.564-6.337v27.592a.5.5 0 01-.41.492l-.09.008H148a.5.5 0 01-.09-.992l.09-.008h47.515v-27.092l-3.564 6.337a.5.5 0 01-.599.228l-.082-.037a.5.5 0 01-.228-.599l.037-.082 4.5-8a.5.5 0 01.818-.078zM163.936 61.255a.5.5 0 01-.116.63l-.075.05-6.337 3.565H181a.5.5 0 01.09.992l-.09.008h-23.592l6.337 3.564a.5.5 0 01.228.599l-.037.082a.5.5 0 01-.599.228l-.082-.037-8-4.5a.5.5 0 01-.078-.818l.078-.054 8-4.5a.5.5 0 01.68.19zM74.5 95.884a.5.5 0 01.492.41l.008.09v13.591l3.564-6.336a.5.5 0 01.909.408l-.037.082-4.5 8a.5.5 0 01-.818.078l-.054-.078-4.5-8a.5.5 0 01.82-.564l.052.074L74 109.975v-13.59a.5.5 0 01.5-.5zM155.936 145.639a.5.5 0 01-.116.63l-.075.05-6.337 3.565H172a.5.5 0 01.09.992l-.09.008h-22.592l6.337 3.564a.5.5 0 01.228.599l-.037.082a.5.5 0 01-.599.228l-.082-.037-8-4.5a.5.5 0 01-.078-.818l.078-.054 8-4.5a.5.5 0 01.68.191z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}
const mapStateToProps = (state) => {
  return {
    session: state.session,
    games: state.games.games
  }
}

export default connect(mapStateToProps)(SvgRules);
