(function () {
  const CONTAINER_CLASS = "eager-self-summary"

  const ICONS = {
    facebook: `
      <svg viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img">
        <path d="M18,0.218 C8.18,0.218 0.219,8.18 0.219,18 C0.219,27.822 8.18,35.782 18,35.782 C27.82,35.782 35.781,27.822 35.781,18 C35.781,8.18 27.82,0.218 18,0.218 L18,0.218 Z" id="Shape" fill="#3B5998"></path>
        <path d="M21.809,18.006 L19.319,18.006 L19.319,26.891 L15.626,26.891 L15.626,18.006 L13.87,18.006 L13.87,14.868 L15.626,14.868 L15.626,12.836 C15.626,11.381 16.317,9.109 19.353,9.109 L22.087,9.119 L22.087,12.168 L20.103,12.168 C19.779,12.168 19.32,12.328 19.32,13.022 L19.32,14.868 L22.134,14.868 L21.809,18.006 L21.809,18.006 Z" fill="#FEFEFE"></path>
      </svg>
    `,

    twitter: `
      <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" role="img">
        <path d="M18,0.218 C8.18,0.218 0.219,8.179 0.219,17.999 C0.219,27.821 8.18,35.782 18,35.782 C27.82,35.782 35.781,27.821 35.781,17.999 C35.781,8.179 27.82,0.218 18,0.218 L18,0.218 Z" id="Shape" fill="#00ACED"></path>
        <path d="M25.07,14.374 C25.078,14.53 25.082,14.686 25.082,14.847 C25.082,19.667 21.412,25.226 14.701,25.226 C12.64,25.226 10.724,24.622 9.109,23.587 C9.396,23.62 9.685,23.638 9.978,23.638 C11.689,23.638 13.261,23.056 14.509,22.076 C12.913,22.047 11.566,20.992 11.103,19.543 C11.324,19.584 11.552,19.609 11.789,19.609 C12.121,19.609 12.443,19.562 12.75,19.48 C11.082,19.144 9.822,17.669 9.822,15.904 L9.822,15.857 C10.316,16.13 10.879,16.295 11.476,16.314 C10.497,15.66 9.853,14.543 9.853,13.277 C9.853,12.609 10.033,11.98 10.347,11.443 C12.146,13.65 14.835,15.103 17.867,15.254 C17.805,14.988 17.771,14.711 17.771,14.424 C17.771,12.408 19.406,10.778 21.419,10.778 C22.468,10.778 23.417,11.219 24.083,11.928 C24.913,11.764 25.694,11.461 26.399,11.041 C26.126,11.895 25.547,12.609 24.794,13.061 C25.534,12.973 26.237,12.776 26.89,12.489 C26.402,13.218 25.783,13.86 25.07,14.374 L25.07,14.374 Z" fill="#FEFEFE"></path>
      </svg>
    `,

    linkedin: `
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,60 C13.432,60 0,46.568 0,30 C0,13.431 13.432,0 30,0 C46.568,0 60,13.431 60,30 C60,46.568 46.568,60 30,60 L30,60 Z" fill="#4875B4"></path>
        <polygon id="Path" fill="#FEFEFE" points="22.354 44.137 22.354 23.71 15.565 23.71 15.565 44.137"></polygon>
        <path d="M18.959,20.922 C21.326,20.922 22.801,19.352 22.801,17.391 C22.757,15.388 21.326,13.863 19.004,13.863 C16.682,13.863 15.163,15.387 15.163,17.391 C15.163,19.352 16.637,20.922 18.916,20.922 L18.959,20.922 L18.959,20.922 Z" id="Path" fill="#FEFEFE"></path>
        <path d="M46.837,44.137 L46.837,32.425 C46.837,26.15 43.487,23.23 39.021,23.23 C35.417,23.23 33.802,25.213 32.902,26.604 L32.902,23.71 L26.112,23.71 C26.202,25.627 26.112,44.137 26.112,44.137 L32.902,44.137 L32.902,32.729 C32.902,32.12 32.946,31.51 33.126,31.074 C33.616,29.854 34.733,28.591 36.608,28.591 C39.066,28.591 40.048,30.464 40.048,33.209 L40.048,44.138 L46.837,44.138 L46.837,44.137 Z" fill="#FEFEFE"></path>
      </svg>
    `,

    github: `
     <svg viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
        <path d="M600,0 C268.62914,0 0,268.62914 0,600 C0,931.37086 268.62914,1200 600,1200 C931.37086,1200 1200,931.37086 1200,600 C1200,268.62914 931.37086,0 600,0 L600,0 L600,0 Z" fill="#000000"></path>
        <path d="M374.561944,261.764017 C361.106565,300.873442 356.441817,343.321346 368.478542,380.394343 C353.936313,396.532094 342.644932,415.07078 334.565705,436.052824 C313.030481,504.116053 318.290435,591.063822 365.436638,643.671916 C381.998735,661.828696 404.468613,676.755941 432.744573,688.457575 C461.020331,700.157768 497.361849,707.62189 541.796255,710.850196 C511.973257,724.786041 490.949983,733.301014 483.613829,764.114175 C450.347775,786.342971 409.895494,781.038694 380.580929,756.865633 C357.414573,739.950824 346.919716,709.888416 321.233354,698.747818 C319.61796,697.134287 314.571933,695.930824 306.089266,695.123547 C297.606192,694.316057 290.938365,696.722789 286.090943,702.37208 C283.667246,704.792897 283.846181,707.379182 286.673522,710.20321 C306.119088,726.018293 324.834421,742.780038 335.795271,762.884406 C346.298195,784.672711 357.168331,800.625306 368.478542,810.711978 C399.853569,831.913136 441.931787,842.943351 478.76001,829.480532 C474.465353,855.396779 486.051417,895.867475 477.530241,919.051858 C474.298214,925.507623 469.674882,931.166448 463.615506,936.008276 C458.215134,941.27628 441.472033,947.866914 444.847155,955.941749 C446.462559,959.573036 452.108748,961.800939 461.80337,962.60796 C483.144337,962.063024 504.389006,953.434973 516.944104,936.590643 C521.388086,930.538522 523.61028,922.651891 523.61028,912.968253 L523.61028,813.753882 C523.61028,802.456492 526.011418,794.39052 530.85883,789.548701 C535.706243,784.707085 540.994579,781.454549 546.650303,779.841028 L546.650303,910.573742 C546.650303,921.871122 545.628674,931.562846 543.608399,939.632521 C541.588336,947.702275 539.787591,953.361101 538.171993,956.58901 C534.463432,962.808986 527.373307,968.548885 527.234551,975.939939 C527.234551,978.360827 528.678874,979.743358 531.50602,980.146736 C552.730392,979.225991 577.356182,966.775258 585.999556,949.275583 C592.86704,934.750337 596.290011,919.464399 596.290011,903.325199 L596.290011,774.986997 L622.954297,774.986997 L622.954297,903.325199 C622.954297,919.464399 626.62062,934.750337 633.891739,949.275583 C641.162849,963.801129 653.298169,973.134937 670.26391,977.169602 C679.150211,979.59049 685.153247,980.550203 688.385274,980.146736 C691.6173,979.743358 693.060387,978.360827 692.656744,975.939939 C690.710605,968.607912 686.655979,962.333946 682.366288,956.58901 C676.710768,949.326171 673.88819,933.975781 673.88819,910.573742 L673.88819,779.841028 C679.543702,781.454549 685.011186,784.707085 690.262233,789.548701 C695.513076,794.39052 698.093141,802.456492 698.093141,813.753882 L698.093141,912.968253 C698.093141,922.651891 700.315344,930.538522 704.759325,936.590643 C718.264409,953.765186 738.616458,962.477978 759.900051,962.60796 C769.594681,961.800939 775.241083,959.573036 776.856266,955.941749 C778.471873,952.310462 777.271105,949.301959 773.232004,946.881019 C769.193115,944.460122 764.147088,940.850069 758.087915,936.008276 C752.028548,931.166448 747.405215,925.507623 744.173198,919.051858 C740.546435,877.424487 744.080673,832.801814 741.131285,790.713858 C735.309049,744.78333 717.630473,729.672811 682.366288,712.079965 C724.377209,708.851659 758.917778,701.144396 785.981775,689.039941 C866.885084,649.730868 889.256587,588.961953 889.597262,507.502795 C888.321306,455.07696 873.187795,409.343597 838.663175,374.310544 C843.510588,355.750739 844.954717,336.432115 842.934636,316.257552 C840.914582,296.08298 836.647663,277.903014 830.184864,261.764017 C800.296204,263.377547 775.246067,269.394244 755.04602,279.88539 C734.848252,290.376306 720.311811,299.286836 711.425298,306.549676 C639.837833,290.297406 563.20246,290.199438 494.551483,308.94439 C459.422538,280.213438 415.886521,264.20719 374.561944,261.764017 L374.561944,261.764017 L374.561944,261.764017 Z" fill="#FEFEFE"></path>
      </svg>
    `
  }

  let element
  let options = INSTALL_OPTIONS

  function gravatarURL(email = "", size = 160) {
    const emailMd5 = window.EagerGravatar.md5(email.toLowerCase())

    return `https://www.gravatar.com/avatar/${emailMd5}.jpg?s=${size}`
  }

  function hexToRGBA(hex, opacity = 1) {
    const components = hex
      .replace("#", "")
      .match(/.{1,2}/g)
      .map(hextet => parseInt(hextet, 16))
      .concat(opacity)
      .join(", ")

    return `rgba(${components})`
  }

  function updateElement() {
    element = Eager.createElement(options.location, element)
    element.classList.add(CONTAINER_CLASS)

    element.setAttribute("data-position", options.position)

    const {gravatarEmail, type: pictureType, url: pictureURL} = options.profilePicture
    const wrapper = document.createElement("eager-wrapper")
    const backgroundColor = options.backgroundColor || "transparent"
    let profileTemplate = ""

    wrapper.style.color = options.textColor || "inherit"

    if (backgroundColor === "transparent") {
      element.setAttribute("data-background-visibility", "hidden")
      wrapper.style.backgroundColor = backgroundColor
    }
    else {
      element.setAttribute("data-background-visibility", "visible")
      wrapper.style.backgroundColor = hexToRGBA(backgroundColor, 0.6)
    }

    if (pictureType !== "none") {
      const imageSrc = pictureType === "upload" && pictureURL || gravatarURL(gravatarEmail)

      profileTemplate = `<eager-profile-picture style="background-image: url('${imageSrc}');"></eager-profile-picture>`
    }

    const iconTemplate = Object
      .keys(options.icons)
      .filter(type => options.icons[type].enabled)
      .reduce((accumulator, type) => {
        const {username} = options.icons[type]

        return accumulator + `<a data-eager-icon="${type}" href="http://${type}.com/${username}" target="_blank">
          ${ICONS[type]}
        </a>`
      }, "")

    wrapper.innerHTML = `
      <eager-details>
        ${profileTemplate}
        <eager-message>${options.message}</eager-message>
        <eager-icons>
          ${iconTemplate}
        </eager-icons>
      </eager-details>
    `

    element.appendChild(wrapper)
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  }
  else {
    updateElement()
  }

  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
