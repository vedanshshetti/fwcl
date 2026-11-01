/**
 * Copyright 2026 Vedansh Shetti
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use client";
import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactNode,
  useState,
} from "react";
import l from "@/app/licenses/Apache2.0";

interface SearchableViewPropertiesInterface<
  T extends Record<string, unknown>,
> extends Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  "children"
> {
  data: ReadonlyArray<T>;
  filterOn: keyof T;
  mapCb: (o: T, i?: number) => ReactNode;
  wrapper?: ({ children }: { children: ReactNode }) => ReactNode;
}

export default function SearchableView<T extends Record<string, unknown>>({
  data,
  filterOn,
  mapCb,
  wrapper = ({ children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {children}
    </div>
  ),
  className,
  ...props
}: SearchableViewPropertiesInterface<T>) {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredData = data.filter((item) => {
    const itemValue = String(item[filterOn] ?? "")
      .toLowerCase()
      .trim();
    // Check if the whole phrase matches OR if any individual word matches
    return (
      itemValue.includes(normalizedSearchTerm) ||
      normalizedSearchTerm.split(" ").some((word) => {
        const cleanWord = word.toLowerCase().trim();
        return cleanWord && itemValue.includes(cleanWord);
      })
    );
  });
  const Wrapper = wrapper;
  return (
    <section
      {...props}
      className={`flex w-full max-w-md flex-col gap-3 ${className ?? ""}`.trim()}
    >
      <input
        type="text"
        value={searchTerm}
        className="rounded-md border p-2"
        placeholder="Search items"
        aria-label="Search items"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredData.length > 0 ? (
        <Wrapper>{filteredData.map(mapCb)}</Wrapper>
      ) : (
        <p className="p-2 text-sm text-gray-500">No matching items.</p>
      )}
    </section>
  );
}

export const tsxTailwind = `
/**${l.trimEnd()}*/
"use client";
import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactNode,
  useState,
} from "react";
import l from "@/app/licenses/Apache2.0";

interface SearchableViewPropertiesInterface<
  T extends Record<string, unknown>,
> extends Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  "children"
> {
  data: ReadonlyArray<T>;
  filterOn: keyof T;
  mapCb: (o: T, i?: number) => ReactNode;
  wrapper?: ({ children }: { children: ReactNode }) => ReactNode;
}

export default function SearchableView<T extends Record<string, unknown>>({
  data,
  filterOn,
  mapCb,
  wrapper = ({ children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {children}
    </div>
  ),
  className,
  ...props
}: SearchableViewPropertiesInterface<T>) {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredData = data.filter((item) => {
    const itemValue = String(item[filterOn] ?? "")
      .toLowerCase()
      .trim();
    // Check if the whole phrase matches OR if any individual word matches
    return (
      itemValue.includes(normalizedSearchTerm) ||
      normalizedSearchTerm.split(" ").some((word) => {
        const cleanWord = word.toLowerCase().trim();
        return cleanWord && itemValue.includes(cleanWord);
      })
    );
  });
  const Wrapper = wrapper;
  return (
    <section
      {...props}
      className={\`flex w-full max-w-md flex-col gap-3 \${className ?? ""}\`.trim()}
    >
      <input
        type="text"
        value={searchTerm}
        className="rounded-md border p-2"
        placeholder="Search items"
        aria-label="Search items"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredData.length > 0 ? (
        <Wrapper>{filteredData.map(mapCb)}</Wrapper>
      ) : (
        <p className="p-2 text-sm text-gray-500">No matching items.</p>
      )}
    </section>
  );
}` as const;

export const jsxTailwind = `
/**${l.trimEnd()}*/
"use client";
import l from "@/app/licenses/Apache2.0";

export default function SearchableView({
  data,
  filterOn,
  mapCb,
  wrapper = ({ children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {children}
    </div>
  ),
  className,
  ...props
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredData = data.filter((item) => {
    const itemValue = String(item[filterOn] ?? "")
      .toLowerCase()
      .trim();
    // Check if the whole phrase matches OR if any individual word matches
    return (
      itemValue.includes(normalizedSearchTerm) ||
      normalizedSearchTerm.split(" ").some((word) => {
        const cleanWord = word.toLowerCase().trim();
        return cleanWord && itemValue.includes(cleanWord);
      })
    );
  });
  const Wrapper = wrapper;
  return (
    <section
      {...props}
      className={\`flex w-full max-w-md flex-col gap-3 \${className ?? ""}\`.trim()}
    >
      <input
        type="text"
        value={searchTerm}
        className="rounded-md border p-2"
        placeholder="Search items"
        aria-label="Search items"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredData.length > 0 ? (
        <Wrapper>{filteredData.map(mapCb)}</Wrapper>
      ) : (
        <p className="p-2 text-sm text-gray-500">No matching items.</p>
      )}
    </section>
  );
}` as const;

export const rawCss = `
/**${l.trimEnd()}*/

.searchable-view {
  display: flex;
  width: 100%;
  max-width: 28rem;
  flex-direction: column;
  gap: 0.75rem;
}

.searchable-view__input {
  border: 1px solid currentColor;
  border-radius: 0.375rem;
  padding: 0.5rem;
}

.searchable-view__results {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  grid-auto-rows: 1fr;
}

.searchable-view__empty {
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

@media (min-width: 640px) {
  .searchable-view__results {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .searchable-view__results {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}` as const;
