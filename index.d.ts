interface Array<T> {
    flatten(options?: FlattenOptions): Array<any>;

    isEmpty(): boolean;

    last(): T;

    lastIndex(): number;

    [Symbol.iterator](): Iterator<T>;

    mapAsync<R>(mapFunc: (item: T) => Promise<R>): Promise<Array<R>>;

    forEachAsync(doFunc: (item: T) => Promise<void>): Promise<void>;
}

declare type FlattenOptions = FlattenDepthOptions | FlattenDeepOptions;

interface FlattenDeepOptions {
    deep: boolean;
}

interface FlattenDepthOptions {
    depth: number;
}

interface Map<K, V> {
    map<NK, NV>(mapper: (value?: V, key?: K, map?: Map<K, V>) => {
        key: NK;
        value: NV;
    }): Map<NK, NV>;

    mapToArray<T>(mapper: (value?: V, key?: K, map?: Map<K, V>) => T): Array<T>;

    filter(predicate: (value?: V, key?: K, map?: Map<K, V>) => boolean): Map<K, V>;

    concat(map: Map<K, V>): Map<K, V>;

    getReverse(searchValue: V): K | undefined;
}
