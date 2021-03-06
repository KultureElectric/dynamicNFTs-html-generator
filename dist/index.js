"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const create_html_1 = __importDefault(require("create-html"));
const transparent_manifest_json_1 = __importDefault(require("./transparent-manifest.json"));
const generateHTML = () => {
    var _a;
    for (let index = 0; index < Object.keys(transparent_manifest_json_1.default.paths).length - 1; index++) {
        const script = `
        <script type="text/javascript">
            async function draw() {

                const locations = {
                    Indonesia: 'https://arweave.net/7GmdWgfTegzVibe4gJfv2-_P3H186AAzcCy1CxvOY50',
                    Hawaii: 'https://arweave.net/ZYKUcvES3dH_8LPX8wB16jQnOrfHgbmF7vqYulLnKYE',
                    Durban: 'https://arweave.net/nBkgm4Mqr6zzPrOyk2RyaaU51xX4c1Nn4h4D3Z9NhXw',
                    CapeTown: 'https://arweave.net/RC6No9lM6_ONnAvALFG2PXXbq_OwY7SEFHR7DgxZJjQ',
                    GoldCoast: 'https://arweave.net/tSVGR-15aDQoNiQSv9mCBn6NIa_nPXNZ0Oi4JFibMoY',
                    Portugal: 'https://arweave.net/b1c5Iv6c638xxfWU0ZJRY8XJZ22EFjsUknobBkRQFik',
                    Biarritz: 'https://arweave.net/xuY8vaN4Klv4zF7xVDczAZ_K3DWeGQjrd2IMfo2_6CY',
                    CostaRica: 'https://arweave.net/khpi9KVrcZFaJFGvCktd5qgBuUd1lg5UBskf6gUZEPk',
                    Brazil: 'https://arweave.net/gElkiFjKB_VOZ0M7wzbZTvtTQ_hQj7coteRgPu3xh0E',
                    Alaska: 'https://arweave.net/Tod9OxlTvZl05wcpyEZbxEte_SyFxcB7A7O-HjhkUjs',
                };

                const waves = {
                    Small: 'https://arweave.net/MCt_mH25eGQHht5yLPwa15gaVaFr_s-L-1C_0enbRwM',
                    Medium: 'https://arweave.net/uNfbcCFv2jRwYS1pugxMlYK-WNgzvti2rMxn6pAkwT8',
                    Large: 'https://arweave.net/NK7uT20VvQYgFMjGUVpxCeBvKhmyyAqsrlw2dP2853s',
                };

                const boards = {
                    OldWood: 'https://arweave.net/RmLzW5gyE6s29yLCoJLMafNHIG00FhXVZtLFnlj-FVU',
                    SlickWood: 'https://arweave.net/mFdBBaGRHSIVpPiVEV3IWl0uj2JpsBDAoqIH7wi0uSQ',
                    HiTech: 'https://arweave.net/2gojCsy-TW-RdB17atlMWZzc1b-TB9hsri4TC5s4LL0',
                    OrangeFish: 'https://arweave.net/DNnwS1hnXfSlklV6XKBTtS1am5VzIzwJYkRWNCDOZFk',
                    RedFish: 'https://arweave.net/08jqIHAjHcGiiL5EYnubebdKkcD8cNQ6yloOMlJhEH4',
                    GreenFish: 'https://arweave.net/n7aZb8qCN8hSnW9NknJhhEOi32XUAFdjlxbPeVKgDC4',
                    BlueFish: 'https://arweave.net/WiW3itQNfkEsHK1KQzNO-feoWCA-dPbH6_6EvYtmXCs',
                    YellowFish: 'https://arweave.net/fWRatJgSVPxFicx442zHvLnrBXzkYa8JNR5RY0eicCY',
                    WhiteBase: 'https://arweave.net/c9rrwQ3cUbLVL2lrGG9rlab7hrl40AZ-rPH2I3Put28',
                    BlueBase: 'https://arweave.net/q2tPoza2xyh3_cqtTLqKymSlm9RuWctS4LFOyZjrHpQ',
                    BlueGFish: 'https://arweave.net/gPUtLzDG3wpq5KzQdi9aTuI4w2VvwhPrcL4oaee047M',
                    WhiteFish: 'https://arweave.net/mUj_Kuj0cBdMYv0z0vydylQzGIWtlraDTfxWVdT8gUs',
                    DarkFish: 'https://arweave.net/oxoBnE_XVk1QacGcK-uhwu76d1fLLEF3b75lxMo8dME',
                    BlackMarmor: 'https://arweave.net/LMDYcj_BSq0pDiVFsqGkRLFXsyyxE143qViwVTFmsQo',
                    Floral: 'https://arweave.net/Bzi13VTN3xcTK4zbC94N1d901PW9qXjF_-0Ct6n9VlE',
                };

                try {
                    const response = await fetch('https://api2.aleph.im/api/v0/aggregates/2BMddnLuE54MZdvbjGoy8RiTdYaZ1rYeVFn1aTcsybvR.json?keys=OceanGuardianOfficial${index + 1}', {
                    method : "GET",
                    cache: 'no-cache'
                    }).then(response => response.json());
                    
                    const dynamicLayers = response.data['OceanGuardianOfficial${index + 1}'];

                    console.log(dynamicLayers)

                    document.getElementById('location').src = locations[dynamicLayers.Location.replace(' ', '').replace('-', '')];
                    document.getElementById('wave').src = waves[dynamicLayers.Wave.replace(' ', '').replace('-', '')];
                    document.getElementById('board').src = boards[dynamicLayers.Board.replace(' ', '').replace('-', '')];

                } catch (e) {
                    console.log(e);
                }
            }
            draw();
        </script>`;
        const html = (0, create_html_1.default)({
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
                    <img style="z-index: 3;" src='https://arweave.net/${(_a = transparent_manifest_json_1.default.paths[`${index}.png`]) === null || _a === void 0 ? void 0 : _a.id}' />
                    <img style="z-index: 2;" id='board' />
                    <img style="z-index: 1;" id='wave' />
                    <img style="z-index: 0;" id='location' />
                </section>
                ${script}`
        });
        (0, fs_1.writeFile)(`dynamicFiles/${index}.html`, html, function (err) {
            if (err)
                console.log(err);
        });
    }
};
generateHTML();
//# sourceMappingURL=index.js.map