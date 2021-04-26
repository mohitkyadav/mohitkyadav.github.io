class Project {
  private _projectID: string;
  private _projectDescription: string;
  private _technologiesUsed: string;
  private _avatarURL: string;
  private _projectURL: string;

  constructor(projectID: string, projectDescription: string, technologiesUsed: string, avatarURL: string, projectURL: string) {
    this._projectID = projectID;
    this._projectDescription = projectDescription;
    this._technologiesUsed = technologiesUsed;
    this._avatarURL = avatarURL;
    this._projectURL = projectURL;
  }

  get projectID(): string {
    return this._projectID;
  }

  set projectID(value: string) {
    this._projectID = value;
  }

  get projectDescription(): string {
    return this._projectDescription;
  }

  set projectDescription(value: string) {
    this._projectDescription = value;
  }

  get technologiesUsed(): string {
    return this._technologiesUsed;
  }

  set technologiesUsed(value: string) {
    this._technologiesUsed = value;
  }

  get avatarURL(): string {
    return this._avatarURL;
  }

  set avatarURL(value: string) {
    this._avatarURL = value;
  }

  get projectURL(): string {
    return this._projectURL;
  }

  set projectURL(value: string) {
    this._projectURL = value;
  }
}

export default Project;


