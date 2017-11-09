<template>
  <section id='foot_guide'>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         style="position:absolute;width:0;height:0">
      <defs>
        <symbol viewBox="0 0 40 40" id="msite">
          <g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="2">
            <path
              d="M31.426 23.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"></path>
            <path
              d="M29.074 31.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C33.202 2.416 21.869-1.62 12.294 2.844 2.718 7.309-1.474 18.586 2.93 28.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"></path>
          </g>
        </symbol>

        <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" id="msiteActive">
          <defs>
            <linearGradient id="index.18edf5a_c" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#2BAEFF"></stop>
              <stop offset="100%" stop-color="#0095FF"></stop>
            </linearGradient>
            <linearGradient id="index.18edf5a_d" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#29ADFF"></stop>
              <stop offset="100%" stop-color="#0095FF"></stop>
            </linearGradient>
            <path id="index.18edf5a_a"
                  d="M30.426 22.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"></path>
            <mask id="index.18edf5a_e" width="9.455" height="10.456" x="-1" y="-1">
              <path fill="#fff" d="M29.426 18.382h9.455v10.456h-9.455z"></path>
              <use xlink:href="#index.18edf5a_a"></use>
            </mask>
            <path id="index.18edf5a_b"
                  d="M28.074 30.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C32.202 1.416 20.869-2.62 11.294 1.844 1.718 6.309-2.474 17.586 1.93 27.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"></path>
            <mask id="index.18edf5a_f" width="38.769" height="39.241" x="-.7" y="-.7">
              <path fill="#fff" d="M-.521-.675h38.769v39.241H-.521z"></path>
              <use xlink:href="#index.18edf5a_b"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)">
              <use fill="url(#index.18edf5a_c)" xlink:href="#index.18edf5a_a"></use>
              <use stroke="url(#index.18edf5a_d)" stroke-width="2" mask="url(#index.18edf5a_e)"
                   xlink:href="#index.18edf5a_a"></use>
            </g>
            <g transform="translate(1 1)">
              <use fill="url(#index.18edf5a_c)" xlink:href="#index.18edf5a_b"></use>
              <use stroke="url(#index.18edf5a_d)" stroke-width="1.4" mask="url(#index.18edf5a_f)"
                   xlink:href="#index.18edf5a_b"></use>
            </g>
          </g>
        </symbol>

        <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" id="find">
          <defs>
            <path id="discover-regular.8ef537f_a"
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path>
            <mask id="discover-regular.8ef537f_b" width="40" height="40" x="0" y="0" fill="#fff">
              <use xlink:href="#discover-regular.8ef537f_a"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use stroke="#666" stroke-width="4" mask="url(#discover-regular.8ef537f_b)"
                 xlink:href="#discover-regular.8ef537f_a"></use>
            <path stroke="#666" stroke-width="2"
                  d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path>
            <path fill="#666"
                  d="M15.693 24.636c-.692.276-1.02-.06-.747-.746l2.21-4.946c.225-.505.721-.602 1.122-.202l2.563 2.563c.394.394.31.893-.203 1.122l-4.945 2.209z"></path>
          </g>
        </symbol>

        <symbol viewBox="0 0 40 40" id="findActive">
          <defs>
            <linearGradient id="discover.5811137_a" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#2BAEFF"></stop>
              <stop offset="100%" stop-color="#0095FF"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <path fill="url(#discover.5811137_a)"
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path>
            <path fill="#FFF"
                  d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path>
            <path fill="url(#discover.5811137_a)"
                  d="M6.482 5.44c-.684-.294-.678-.764 0-1.055L11.54 2.45c.517-.198.936.085.936.65v3.625c0 .558-.412.852-.936.65L6.48 5.44z"
                  transform="rotate(-45 34.258 3.92)"></path>
          </g>
        </symbol>

        <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 38" id="order">
          <defs>
            <rect id="order-regular.41c17f8_a" width="38" height="38" rx="2"></rect>
            <mask id="order-regular.41c17f8_b" width="38" height="38" x="0" y="0" fill="#fff">
              <use xlink:href="#order-regular.41c17f8_a"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use stroke="#666" stroke-width="4" mask="url(#order-regular.41c17f8_b)"
                 xlink:href="#order-regular.41c17f8_a"></use>
            <rect width="24" height="2" x="7" y="8" fill="#666" rx="1"></rect>
            <rect width="20" height="2" x="7" y="17" fill="#666" rx="1"></rect>
            <rect width="8" height="2" x="7" y="26" fill="#666" rx="1"></rect>
          </g>
        </symbol>

        <symbol viewBox="0 0 38 38" id="orderActive">
          <defs>
            <linearGradient id="order.070ae2a_a" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#2BAEFF"></stop>
              <stop offset="100%" stop-color="#0095FF"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <rect width="38" height="38" fill="url(#order.070ae2a_a)" rx="2"></rect>
            <rect width="24" height="2" x="7" y="8" fill="#FFF" rx="1"></rect>
            <rect width="20" height="2" x="7" y="17" fill="#FFF" rx="1"></rect>
            <rect width="8" height="2" x="7" y="26" fill="#FFF" rx="1"></rect>
          </g>
        </symbol>

        <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 38" id="profile">
          <defs>
            <path id="profile-regular.c151d62_a"
                  d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833z"></path>
            <mask id="profile-regular.c151d62_c" width="18" height="21" x="0" y="0" fill="#fff">
              <use xlink:href="#profile-regular.c151d62_a"></use>
            </mask>
            <path id="profile-regular.c151d62_b"
                  d="M0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path>
            <mask id="profile-regular.c151d62_d" width="38" height="16" x="0" y="0" fill="#fff">
              <use xlink:href="#profile-regular.c151d62_b"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="4">
            <use mask="url(#profile-regular.c151d62_c)" xlink:href="#profile-regular.c151d62_a"></use>
            <use mask="url(#profile-regular.c151d62_d)" xlink:href="#profile-regular.c151d62_b"></use>
          </g>
        </symbol>

        <symbol viewBox="0 0 38 38" id="profileActive">
          <defs>
            <linearGradient id="profile.dbc5ebf_a" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#2BAEFF"></stop>
              <stop offset="100%" stop-color="#0095FF"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#profile.dbc5ebf_a)" fill-rule="evenodd"
                d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833zM0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path>
        </symbol>

        <symbol viewBox="0 0 1024 1024" id="home">
          <path fill="#8a8a8a" d="M768 790.56l-128-0.032v-118.944a128.224 128.224 0 0 0-128-128.192c-70.592 0-128 57.504-128 128.192v118.88l-128-0.032V364.992l255.68-167.52L768 365.376v425.184z m-192-0.032l-128-0.032v-118.912c0-35.392 28.704-64.192 64-64.192s64 28.8 64 64.192v118.944z m304.896-427.68L800 309.856V207.168a32 32 0 1 0-64 0v60.768l-206.464-135.296A31.296 31.296 0 0 0 511.424 128a31.168 31.168 0 0 0-17.6 4.64l-351.36 230.208a32 32 0 0 0 35.072 53.536L192 406.912v393.056c0 30.08 27.2 54.592 60.576 54.592h518.848c33.408 0 60.576-24.512 60.576-54.592v-392.64l13.856 9.056a31.968 31.968 0 0 0 35.04-53.536z" />
        </symbol>
        <symbol viewBox="0 0 1024 1024" id="homeActive">
          <path fill="#12b7f5" d="M640 790.528H297.504v-0.096l86.496 0.032v-118.88c0-0.8 0.224-1.536 0.224-2.304 1.28-69.6 57.984-125.888 127.776-125.888s126.496 56.32 127.776 125.888c0 0.768 0.224 1.504 0.224 2.304v118.944z m240.896-427.68L800 309.856V207.168a32 32 0 1 0-64 0v60.8l-206.464-135.328A31.296 31.296 0 0 0 511.424 128a31.168 31.168 0 0 0-17.6 4.64L142.464 362.88a32 32 0 0 0 35.072 53.536L192 406.912V800c0 30.08 27.168 54.592 60.576 54.592h518.848C804.832 854.56 832 830.08 832 800V407.36l13.856 9.056a31.968 31.968 0 0 0 35.04-53.536z" />
        </symbol>

        <symbol viewBox="0 0 1024 1024" id="userCenter">
          <path fill="#8a8a8a" d="M800 835.328l-574.496 0.032A2.464 2.464 0 0 1 224 834.656v-118.656c0-5.856 5.92-14.944 12.096-17.44 1.056-0.448 69.408-30.272 149.952-50.464 41.248-10.336 85.632-18.208 125.952-18.208 36.64 0 76.736 6.496 114.816 15.456a1061.6 1061.6 0 0 1 161.856 53.536c5.312 2.176 11.328 11.296 11.328 17.12v119.36zM400.992 326.88A103.136 103.136 0 0 1 504.16 224a103.168 103.168 0 0 1 103.2 102.88v123.104a103.168 103.168 0 0 1-103.2 102.88 103.136 103.136 0 0 1-103.168-102.88v-123.104zM813.728 640c-3.904-1.728-58.56-25.6-129.312-45.76a883.616 883.616 0 0 0-72.608-17.6c36.096-30.592 59.552-75.68 59.552-126.656v-123.104A167.168 167.168 0 0 0 504.192 160c-92.16 0-167.2 74.72-167.2 166.88v123.104c0 52.352 24.768 98.624 62.72 129.28-25.472 5.376-50.112 11.872-72.8 18.656a1098.656 1098.656 0 0 0-115.648 41.664C182.016 651.328 160 684.192 160 716v131.68l1.696 4.992c9.504 27.936 35.136 46.72 63.808 46.72h572.992a65.536 65.536 0 0 0 64.96-56.96l0.544-126.4c0-31.616-21.952-64.416-50.272-76.032z" />
        </symbol>
        <symbol viewBox="0 0 1024 1024" id="userCenterActive">
          <path fill="#12b7f5" d="M813.728 640c-3.904-1.728-58.56-25.6-129.312-45.792a883.616 883.616 0 0 0-72.608-17.568c36.096-30.592 59.552-75.68 59.552-126.656v-123.104A167.168 167.168 0 0 0 504.192 160c-92.16 0-167.2 74.72-167.2 166.88v123.104c0 52.352 24.768 98.624 62.72 129.248-25.472 5.408-50.112 11.904-72.8 18.688a1098.656 1098.656 0 0 0-115.648 41.664C182.016 651.328 160 684.192 160 716v131.68l1.696 4.992c9.504 27.936 35.136 46.688 63.808 46.688h572.992a65.536 65.536 0 0 0 64.96-56.96l0.544-126.4c0-31.584-21.952-64.384-50.272-76" />
        </symbol>

        <symbol viewBox="0 0 1024 1024" id="news">
          <path fill="#8a8a8a" d="M224 831.936V192.096L223.744 192 800 192.096 800.256 832 224 831.936zM800.256 128H223.744A64 64 0 0 0 160 192.096v639.84A64 64 0 0 0 223.744 896h576.512A64 64 0 0 0 864 831.936V192.096A64 64 0 0 0 800.256 128zM640 416h-256a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64M640 576h-256a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64" />
        </symbol>
        <symbol viewBox="0 0 1024 1024" id="newsActive">
          <path fill="#12b7f5" d="M640 479.968h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64m0 160h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64M800.256 128H223.744A64 64 0 0 0 160 192.064v639.84A64 64 0 0 0 223.744 896h576.512A64 64 0 0 0 864 831.904V192.064A64 64 0 0 0 800.256 128" />        </symbol>

        <symbol viewBox="0 0 1024 1024" id="community">
          <path fill="#8a8a8a" d="M704 720.544c-14.688 0-27.104 9.92-30.848 23.36h-232.448c-23.904 0-49.152 14.048-62.4 34.016l-34.4 32.64-0.064-12.576a32.48 32.48 0 0 0-3.68-14.752c-12.032-22.752-39.584-39.296-65.6-39.296H224V384h10.656a32 32 0 1 0 0-64h-21.312C183.936 320 160 344.864 160 375.424v377.12c0 30.56 24 55.36 53.472 55.36h61.056a14.144 14.144 0 0 1 5.376 2.144l0.288 45.856a31.936 31.936 0 0 0 6.624 19.328c10.144 13.216 24.992 20.8 40.704 20.768h0.032c14.752 0 28.768-6.72 38.816-18.464l59.104-56.192c1.952-1.856 4.768-5.824 6.176-8.128a15.968 15.968 0 0 1 9.056-5.28h241.984a53.12 53.12 0 0 0 47.296-29.824 31.68 31.68 0 0 0 6.016-18.688v-6.88a32 32 0 0 0-32-32M832 551.936h-50.56c-16.032 0-32.224 6.752-45.44 16.896-3.04 2.336-6.24 4.448-8.896 7.168a68.736 68.736 0 0 0-11.264 15.232 32.256 32.256 0 0 0-3.68 14.72l-0.064 12.64-34.4-32.672c-2.4-3.616-5.536-6.752-8.64-9.92-14.048-14.4-34.176-24.064-53.76-24.064H384V192h448v359.936zM890.848 160c-8.544-18.848-26.848-32-48.192-32H373.344c-21.344 0-39.648 13.152-48.192 32a56.96 56.96 0 0 0-5.152 23.392v377.152c0 5.408 0.992 10.528 2.368 15.456 6.496 23.008 26.752 39.936 50.944 39.936h241.952a15.968 15.968 0 0 1 9.024 5.184 31.392 31.392 0 0 0 6.24 8.224l59.104 56.192c10.048 11.776 24.064 18.464 38.816 18.464h0.032c15.712 0 30.56-7.552 40.704-20.768a31.936 31.936 0 0 0 6.624-19.328l0.288-45.888a13.568 13.568 0 0 1 5.344-2.08h61.088c24.256 0 44.576-16.928 51.072-39.936 1.408-4.928 2.4-10.048 2.4-15.456V183.392A56.96 56.96 0 0 0 890.848 160zM528 320a48 48 0 1 0 0.032 96.032 48 48 0 0 0-0.032-96M688 320a48 48 0 1 0 0.032 96.032 48 48 0 0 0-0.032-96" />
        </symbol>
        <symbol viewBox="0 0 1024 1024" id="communityActive">
          <path fill="#12b7f5" d="M688 416a48 48 0 0 1-0.064-96h0.128a48 48 0 0 1-0.064 96m-160 0a48 48 0 0 1-0.064-96h0.128a48 48 0 0 1-0.064 96m362.848-256h-0.032c-8.544-18.88-26.848-32-48.16-32H373.344c-21.312 0-39.648 13.12-48.16 32a56.512 56.512 0 0 0-5.184 23.264V320H160h53.344C183.936 320 160 344.832 160 375.36v377.152c0 30.56 24 55.36 53.44 55.36H274.528c1.376 0.064 3.488 0.96 5.408 2.144l0.256 45.856c0 2.784 0.64 5.44 1.376 8.128a31.552 31.552 0 0 0 5.248 11.2c10.176 13.216 24.96 20.8 40.672 20.8h0.064c14.784 0 28.736-6.72 38.816-18.464l14.24-13.536 44.864-42.688c1.984-1.856 4.768-5.824 6.208-8.128a15.84 15.84 0 0 1 9.056-5.28h241.952c15.296 0 29.088-6.752 38.848-17.504l-0.352-0.352h0.544l-28.96-27.328-19.584-18.816h-0.352l-79.84-75.392H384c-115.04-0.992-118.016-94.976-118.016-94.976V355.2c0.128-1.088 0.672-2.08 0.672-3.232 0-1.152-0.544-2.112-0.672-3.232v-0.256h-0.032A31.68 31.68 0 0 0 234.656 320H320v240.608c0 5.376 0.992 10.464 2.4 15.36 6.496 23.008 26.752 39.936 50.912 39.936h241.952a15.84 15.84 0 0 1 9.024 5.216 31.776 31.776 0 0 0 6.24 8.192l59.136 56.224c10.048 11.744 24.064 18.464 38.816 18.464 2.56 0 5.024-0.512 7.52-0.896a51.84 51.84 0 0 0 33.184-19.904c4.256-5.536 6.592-12.32 6.656-19.328l0.256-45.856a13.216 13.216 0 0 1 5.344-2.112h61.12c24.256 0 44.544-16.96 51.072-39.904a56.32 56.32 0 0 0 2.368-15.488V183.36c0-8.384-1.92-16.256-5.152-23.392" />
        </symbol>
      </defs>
    </svg>


    <section @click="gotoAddress({path: '/myHome'})" class="guide_item">
      <svg class="icon_style">
        <use xmlns:xlink="http://www.w3.org/1999/xlink"
             :xlink:href="$route.path.indexOf('myHome') !== -1? '#homeActive' : '#home'"></use>
      </svg>
      <span :class="$route.path.indexOf('myHome') !== -1? 'Active' : ''">外卖</span>
    </section>

    <section @click="gotoAddress({path: '/news' })" class="guide_item">
      <svg class="icon_style">
        <use xmlns:xlink="http://www.w3.org/1999/xlink"
             :xlink:href="$route.path.indexOf('news') !== -1? '#newsActive' : '#news'"></use>
      </svg>
      <span :class="$route.path.indexOf('news') !== -1? 'Active' : ''">新闻</span>
    </section>
    <section @click="gotoAddress('/community')" class="guide_item">
      <svg class="icon_style">
        <use xmlns:xlink="http://www.w3.org/1999/xlink"
             :xlink:href="$route.path.indexOf('community') !== -1? '#communityActive' : '#community'"></use>
      </svg>
      <span :class="$route.path.indexOf('community') !== -1? 'Active' : ''">社区</span>
    </section>
    <section @click="gotoAddress('/userCenter')" class="guide_item">
      <svg class="icon_style">
        <use xmlns:xlink="http://www.w3.org/1999/xlink"
             :xlink:href="$route.path.indexOf('userCenter') !== -1? '#userCenterActive' : '#userCenter'"></use>
      </svg>
      <span :class="$route.path.indexOf('userCenter') !== -1? 'Active' : ''">我的</span>
    </section>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data(){
      return {}
    },
    created(){

    },
    mounted(){

    },
    computed: {
      ...mapState([
        'geohash'
      ]),
    },
    methods: {
      gotoAddress(path){
        this.$router.push(path)
      }
    },
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../style/mixin';

  #foot_guide {
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    @include wh(100%, 1.95rem);
    display: flex;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);
  }

  .guide_item {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    .icon_style {
      @include wh(.8rem, .8rem);
      margin-bottom: .2rem;
      margin-top: .3rem;
      fill: #ccc;
    }
    span {
      @include sc(.45rem, #666);
    }
    .Active{
      color: #12b7f5;
    }
  }

</style>
