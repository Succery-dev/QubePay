import {
  CreateProjectFormInterface,
  StoreFileDeliverableInterface,
} from "../index";

interface DisplayProjectDetailsInterface extends CreateProjectFormInterface {
  "Client's Wallet Address": `0x${string}`;
  "Lancer's Wallet Address": `0x${string}`;
  fileDeliverable: StoreFileDeliverableInterface[];
  textDeliverable: string[];
}

export type { DisplayProjectDetailsInterface };