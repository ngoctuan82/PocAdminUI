export interface InvalidData{
    mappedId: number;
    event_Id: number;
    event_ActionId: number;
    event_SecId: number;
    event_FileId: number;
    event_EffectiveDate: Date;
    event_AmmendmentDate: Date;
    event_FileName: string;
    ca_Id: number;
    ca_EffectiveDate: number;
    ca_AmmendmentDate: number;
    ca_Created: Date;
    ca_RefId: string | null;
    validated:boolean;
  }