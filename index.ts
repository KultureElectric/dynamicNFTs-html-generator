import { writeFile } from 'fs';
import createHTML from 'create-html';

import data from './imagesOnly-manifest.json';

const generateHTML = () => {
    
    for(let index = 0; index < Object.keys(data.paths).length; index++) {  
        const script = `
        <script type="text/javascript">
            async function draw() {

                const locations = {
                    Indonesia: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/61mBfJROOL-eNU3TUmEtzQ011hmvfhGGys89JeNQpl0',
                    Hawaii: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/zSp0B5kobpZPHkqzaIPFwEimAMZ6l0qCU5sM5Rr_PqE',
                    Durban: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/3L4cYwpZTYo9J28aX-1IKPkASmzVd5NKKcRrd8qV6kc',
                    CapeTown: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/19A038dxNEQu_XomlX5R9eEjO2Yv-rp5crSq9xUcGLI',
                    GoldCoast: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/Eua7FolEzBdujuO57jII901HdRO57r6Ge0QHxGlcTHo',
                    Portugal: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/tZGB4CcQBOmieJQIuANn3kt9W6MxZUIGPfOsb_-9GX8',
                    FranceBiarritz: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/PiDO2X1mvZdc2WoZDgJZbA6_r5Qc0wTQfh6XAKdJfMQ',
                    CostaRica: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/l1oXa6DyLHIjxpJ1TXDh4xOuwr64ApXwSlQwukYj1BI',
                    Brazil: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/zc6PbxdDM_bsb6GWLPUb7JNHiwhJkoV75r15jsAJm-M',
                    Alaska: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/ZJRr2uf6RgSLli3nQeeUl7nhfC5JWVaLSl3o_Xxukms'
                };

                const waves = {
                    Small: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/JAiY2QDdlE2HSUlIuDer-wPF7qb5AR8Aec-SkLlenyc',
                    Medium: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/TM_jwILBmYz798RGSop898IQgPH4p6zNbvD3LndzPNY',
                    Large: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/rWX8SvAl2A2f93c3qziI1ZWuxhpeG3fKuh701r70NdY'
                };

                const boards = {
                    OldWood: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/A87QpUbtWsaE57P0wsrAA_8y3mpu1_wWB9A0J2c-_aA',
                    SlickWood: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/632i5zzvnd6UxmPbFy8-HMBla6pRYaDaQ4ld4piGwEc',
                    HiTech: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/M6oy71dKuij3OZ-CtVMmz87azMUnVOBhEzjrrHKGjCE',
                    Base1: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/eFg0Isck1ksbfurZllw6jeZvuecFUo8Fu_D-evJl1hE',
                    Base2: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/HHe7cKwuwIs5kQWLFxhT5LL-pLAPDYwjZOzN84B7eSE',
                    Base3: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/txkJ4XZh2MXUkkzI-et6SqosIpPgeOI8cR5ELNleKaM',
                    Base4: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/w1OtzkpqjJvaaiGEj6JF4vdjKagIgR8IFM8sOJZdU7g',
                    Fish1: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/fWRatJgSVPxFicx442zHvLnrBXzkYa8JNR5RY0eicCY',
                    Fish2: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/TKCR9R-yL0bk8xnKtp9wz3CCER6wEh-isPof256-7Vc',
                    Fish3: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/YCHOW9cxLTSs0hqpJqN84vQKDTE5uQkhJrBqv-bTtXw',
                    Fish4: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/AKeE8Ko5dZEKITfNi-jiY2A9rTuGGjezaV2INDPyufE',
                    Fish5: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/XFjpHU4v8IulgTddnX_i7a0b-ZJX5eYKphQJUHtln-Q',
                    Fish6: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/H9GIw1TtgwtAphIwT7doA7crBHD75Bnu7cymXctyc0I',
                    Fish7: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/cWHOf60BblNk8W3gmPJZQ8R2D2IfePYLT3PMmCzstL0',
                    Fish8: 'https://5ywn6daenz6poefpjkgs3c2vdgtzsk2vevam6ap7mvc4443iwdfq.arweave.net/ssv-4jR4BZ_Vw76Kuf58s43Yr0BPO_1QeYrQHTpU3rg'
                };

                try {
                    const response = await fetch('https://api2.aleph.im/api/v0/aggregates/2BMddnLuE54MZdvbjGoy8RiTdYaZ1rYeVFn1aTcsybvR.json?keys=OceanGuardian${index + 1}', {
                    method : "GET",
                    cache: 'no-cache'
                    }).then(response => response.json());
                    
                    const dynamicLayers = response.data['OceanGuardian${index + 1}'];

                    document.getElementById('location').src = locations[dynamicLayers.Location.replace(' ', '')];
                    document.getElementById('wave').src = waves[dynamicLayers.Wave.replace(' ', '')];
                    document.getElementById('board').src = boards[dynamicLayers.Board.replace(' ', '')];

                } catch (e) {
                    console.log(e);
                }
            }
            draw();
        </script>`


        const html = createHTML({
            title: `OceanGuardian #${index + 1}`,
            scriptAsync: true,
            // css: 'dynamicNFT.css',
            body: `
                <style>
                    img {
                        position: fixed;
                        height:100%;
                        width:100%;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                    }
                </style>

                <section>
                    <img style="z-index: 3;" src='https://arweave.net/${data.paths[`${index}.png`]?.id}' />
                    <img style="z-index: 2;" id='board' />
                    <img style="z-index: 1;" id='wave' />
                    <img style="z-index: 0;" id='location' />
                </section>
                ${script}`
        });
        writeFile(`dynamicFiles/${index}.html`, html, function (err) {
            if (err) console.log(err)
          })
    }
}

generateHTML();
