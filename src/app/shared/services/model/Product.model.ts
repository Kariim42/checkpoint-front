export class Product {
    private _title: string;
    private _description: string;
    private _categoryId: number;
 
	constructor(title: string, description: string, categoryId: number) {
		this._title = title;
		this._description = description;
		this._categoryId = categoryId;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter categoryId
     * @return {number}
     */
	public get categoryId(): number {
		return this._categoryId;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter categoryId
     * @param {number} value
     */
	public set categoryId(value: number) {
		this._categoryId = value;
	}
    
}