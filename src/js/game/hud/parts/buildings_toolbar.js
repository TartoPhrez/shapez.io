import { MetaBeltBuilding } from "../../buildings/belt";
import { MetaCutterBuilding } from "../../buildings/cutter";
import { MetaDisplayBuilding } from "../../buildings/display";
import { MetaFilterBuilding } from "../../buildings/filter";
import { MetaLeverBuilding } from "../../buildings/lever";
import { MetaMinerBuilding } from "../../buildings/miner";
import { MetaMixerBuilding } from "../../buildings/mixer";
import { MetaPainterBuilding } from "../../buildings/painter";
import { MetaReaderBuilding } from "../../buildings/reader";
import { MetaRotaterBuilding } from "../../buildings/rotater";
import { MetaSplitterBuilding } from "../../buildings/splitter";
import { MetaStackerBuilding } from "../../buildings/stacker";
import { MetaTrashBuilding } from "../../buildings/trash";
import { MetaUndergroundBeltBuilding } from "../../buildings/underground_belt";
import { HUDBaseToolbar } from "./base_toolbar";

const supportedBuildings = [
    MetaBeltBuilding,
    MetaSplitterBuilding,
    MetaUndergroundBeltBuilding,
    MetaMinerBuilding,
    MetaCutterBuilding,
    MetaRotaterBuilding,
    MetaStackerBuilding,
    MetaMixerBuilding,
    MetaPainterBuilding,
    MetaTrashBuilding,
    MetaLeverBuilding,
    MetaFilterBuilding,
    MetaDisplayBuilding,
    MetaReaderBuilding,
];

export class HUDBuildingsToolbar extends HUDBaseToolbar {
    constructor(root) {
        super(root, {
            supportedBuildings,
            visibilityCondition: () =>
                !this.root.camera.getIsMapOverlayActive() && this.root.currentLayer === "regular",
            htmlElementId: "ingame_HUD_buildings_toolbar",
        });
    }
}
